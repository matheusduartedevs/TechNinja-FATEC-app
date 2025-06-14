import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AccessibilitySettings {
  colorBlindMode: boolean;
  lowVisionMode: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleColorBlindMode: () => void;
  toggleLowVisionMode: () => void;
}

const defaultSettings: AccessibilitySettings = {
  colorBlindMode: false,
  lowVisionMode: false,
};

const AccessibilityContext = createContext<AccessibilityContextType>({
  settings: defaultSettings,
  toggleColorBlindMode: () => {},
  toggleLowVisionMode: () => {},
});

export const AccessibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem("accessibilitySettings");
        if (saved) {
          setSettings(JSON.parse(saved));
        }
      } catch (error) {
        console.error(
          "Erro ao carregar configurações de acessibilidade:",
          error,
        );
      }
    };

    loadSettings();
  }, []);

  const saveSettings = useCallback(
    async (update: (prev: AccessibilitySettings) => AccessibilitySettings) => {
      try {
        setSettings((prev) => {
          const newSettings = update(prev);
          AsyncStorage.setItem(
            "accessibilitySettings",
            JSON.stringify(newSettings),
          );
          return newSettings;
        });
      } catch (error) {
        console.error("Erro ao salvar configurações de acessibilidade:", error);
      }
    },
    [],
  );

  const toggleColorBlindMode = useCallback(() => {
    saveSettings((prev) => ({
      ...prev,
      colorBlindMode: !prev.colorBlindMode,
    }));
  }, [saveSettings]);

  const toggleLowVisionMode = useCallback(() => {
    saveSettings((prev) => ({
      ...prev,
      lowVisionMode: !prev.lowVisionMode,
    }));
  }, [saveSettings]);

  const value = useMemo(
    () => ({
      settings,
      toggleColorBlindMode,
      toggleLowVisionMode,
    }),
    [settings, toggleColorBlindMode, toggleLowVisionMode],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility deve ser usado dentro de AccessibilityProvider",
    );
  }
  return context;
};
