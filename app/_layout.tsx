import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import karashaFont from "../assets/fonts/Karasha.ttf";
import quicksandRegularFont from "../assets/fonts/Quicksand-Regular.ttf";
import quicksandBoldFont from "../assets/fonts/Quicksand-Bold.ttf";
import Toast from "react-native-toast-message";

import { AuthProvider } from "@/src/hooks/AuthContext";
import { AccessibilityProvider } from "@/src/hooks/AccessibilityContext";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Karasha: karashaFont,
    QuicksandRegular: quicksandRegularFont,
    QuicksandBold: quicksandBoldFont,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AuthProvider>
      <AccessibilityProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast />
      </AccessibilityProvider>
    </AuthProvider>
  );
}
