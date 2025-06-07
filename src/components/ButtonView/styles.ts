import designSystem from "@/src/styles/theme";
import { ButtonProps } from "./props";
import { ViewStyle, TextStyle } from "react-native";

const colorMapping = {
  primary: designSystem.colors.action.primary,
  primaryColorBlind: designSystem.colors.action.primaryColorBlind,
  primaryBackground: designSystem.colors.action.primaryBackground,
};

const hoverColorMapping = {
  primary: designSystem.colors.action.primaryHover,
  primaryColorBlind: designSystem.colors.action.primaryColorBlindHover,
  primaryBackground: designSystem.colors.action.primaryBackgroundHover,
};

const textColorMapping = {
  primary: designSystem.colors.text.primary,
  secondary: designSystem.colors.text.secondary,
};

export const styles = ({
  color = "primary",
  pressed = false,
  colorText = "secondary",
  settings,
}: Pick<ButtonProps, "color" | "colorText"> & {
  pressed?: boolean;
  settings: any;
}): {
  button: ViewStyle;
  text: TextStyle;
} => {
  const adjustedColor = settings.colorBlindMode ? `${color}ColorBlind` : color;

  return {
    button: {
      backgroundColor: pressed
        ? hoverColorMapping[adjustedColor]
        : colorMapping[adjustedColor],
      width: 343,
      height: 64,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: settings.lowVisionMode
        ? designSystem.fonts.lowVisionTextSize
        : designSystem.fonts.textSize,
      fontFamily: designSystem.fonts.primaryBold,
      color: textColorMapping[colorText],
    },
  };
};
