import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/navigation/types";

interface Credentials {
  email: string;
  senha: string;
}

interface Updates {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Updates) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadSession = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        const decoded: any = jwtDecode(storedToken);
        const userData = await fetchUserData(decoded.id, storedToken);
        if (userData) {
          setUser(userData);
        }
      }
    };
    loadSession();
  }, []);

  const fetchUserData = async (userId: string, token: string) => {
    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/users/user/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) throw new Error("Erro ao buscar dados do usuário");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      return null;
    }
  };

  const login = async (credentials: Credentials) => {
    console.log(
      "URL da API:",
      `${
        process.env.EXPO_PUBLIC_MODE === "development"
          ? process.env.EXPO_PUBLIC_API_URL_DEV
          : process.env.EXPO_PUBLIC_API_URL_PROD
      }/api/login`,
    );
    console.log("Enviando para login:", JSON.stringify(credentials));
    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        },
      );

      const resData = await response.json();
      console.log("resData", response);
      if (response.ok) {
        setToken(resData.token);
        await AsyncStorage.setItem("token", resData.token);

        const decoded: any = jwtDecode(resData.token);
        const userData = await fetchUserData(decoded.id, resData.token);
        if (userData) {
          setUser(userData);
        }

        // navigation.navigate("home");
      } else {
        throw new Error(resData.message || "Erro ao fazer login");
      }
    } catch (error: any) {
      console.error("Erro no login:", error);
      throw new Error(error.message || "Erro ao fazer login");
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigation.navigate("login");
  };

  const updateUser = async (updates: Updates) => {
    if (!token || !user?.id) return;

    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/users/update/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updates),
        },
      );

      if (!response.ok) throw new Error("Erro ao atualizar dados");

      setUser((prev) => ({
        ...prev!,
        ...updates,
      }));
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const value = useMemo(
    () => ({ user, token, login, logout, updateUser }),
    [user, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
