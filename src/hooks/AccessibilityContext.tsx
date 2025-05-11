import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
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

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  const loadSettings = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem("accessibilitySettings");
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error("Erro ao carregar configurações de acessibilidade:", error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const saveSettings = async (newSettings: AccessibilitySettings) => {
    try {
      await AsyncStorage.setItem(
        "accessibilitySettings",
        JSON.stringify(newSettings),
      );
      setSettings(newSettings);
    } catch (error) {
      console.error("Erro ao salvar configurações de acessibilidade:", error);
    }
  };

  const toggleColorBlindMode = () => {
    const newSettings = {
      ...settings,
      colorBlindMode: !settings.colorBlindMode,
    };
    saveSettings(newSettings);
  };

  const toggleLowVisionMode = () => {
    const newSettings = { ...settings, lowVisionMode: !settings.lowVisionMode };
    saveSettings(newSettings);
  };

  const value = useMemo(
    () => ({
      settings,
      toggleColorBlindMode,
      toggleLowVisionMode,
    }),
    [settings],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context)
    throw new Error(
      "useAccessibility deve ser usado dentro de AccessibilityProvider",
    );
  return context;
};
