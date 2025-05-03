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
  nome?: string;
  email?: string;
  senha?: string;
  avatar?: string;
}

interface User {
  id: string;
  nome: string;
  pontuacao: number;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: Credentials) => Promise<void>;
  register: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Updates) => Promise<void>;
  updateScoreAndMarkCompleted: (
    pontos: number,
    area: string,
    subtema: string,
    dificuldade: string,
  ) => Promise<void>;
  loadSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const loadSession = async () => {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const decoded: any = jwtDecode(storedToken);
      const userData = await fetchUserData(decoded.id, storedToken);
      if (userData) {
        setUser(userData);
        return userData;
      }
    }
    return null;
  };

  useEffect(() => {
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
      if (response.ok) {
        setToken(resData.token);
        await AsyncStorage.setItem("token", resData.token);

        const decoded: any = jwtDecode(resData.token);
        const userData = await fetchUserData(decoded.id, resData.token);
        if (userData) {
          setUser(userData);
        }
      } else {
        throw new Error(resData.message || "Erro ao fazer login");
      }
    } catch (error: any) {
      console.error("Erro no login:", error);
      throw new Error(error.message || "Erro ao fazer login");
    }
  };

  const register = async (userData: {
    nome: string;
    email: string;
    senha: string;
  }) => {
    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        },
      );

      const resData = await response.json();

      if (response.ok && resData.token) {
        await AsyncStorage.setItem("token", resData.token);
        setToken(resData.token);

        const decoded: any = jwtDecode(resData.token);

        const fullUserData = await fetchUserData(decoded.id, resData.token);
        if (fullUserData) {
          setUser(fullUserData);
        } else {
          console.log("Usuário registrado, mas falha ao buscar dados.");
        }
      } else {
        console.log(
          "Erro ao registrar:",
          resData.message || "Sem token retornado",
        );
      }
    } catch (error) {
      console.error("Erro no register:", error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigation.navigate("login");
  };

  const updateUser = async (updates: Updates) => {
    if (!token) {
      console.error("Token não encontrado");
      return;
    }

    let decoded: any;
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      return;
    }

    if (!decoded.id) {
      console.error("ID do usuário não encontrado no token");
      return;
    }

    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/users/update/${decoded.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updates),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao atualizar dados");
      }

      const updatedUserData = await fetchUserData(decoded.id, token);
      if (updatedUserData) {
        setUser(updatedUserData);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };
  const updateScoreAndMarkCompleted = async (
    points: number,
    area: string,
    subtema: string,
    dificuldade: string,
  ) => {
    if (!token) {
      console.error("Token não encontrado.");
      return;
    }

    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/update-score`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ points }),
        },
      );

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message || "Erro ao atualizar pontuação");
      }

      await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/mark-quiz-completed`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            area,
            subtema,
            dificuldade,
          }),
        },
      );
    } catch (error) {
      console.error("❌ Erro ao finalizar quiz:", error);
    }
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      updateUser,
      register,
      updateScoreAndMarkCompleted,
      loadSession,
    }),
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
