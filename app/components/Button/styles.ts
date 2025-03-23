import designSystem from "@/app/styles/theme";
import { ButtonProps } from "./props";
import { ViewStyle, TextStyle } from "react-native";

const colorMapping = {
  primary: designSystem.colors.action.primary,
  primaryBackground: designSystem.colors.action.primaryBackground,
  secondary: designSystem.colors.action.secondary,
  tertiary: designSystem.colors.action.tertiary,
};

const hoverColorMapping = {
  primary: designSystem.colors.action.primaryHover,
  primaryBackground: designSystem.colors.action.primaryBackground,
  secondary: designSystem.colors.action.secondaryHover,
  tertiary: designSystem.colors.action.tertiaryHover,
};

const textColorMapping = {
  primary: designSystem.colors.text.primary,
  secondary: designSystem.colors.text.secondary,
};

export const styles = ({
  color = "primary",
  pressed = false,
  colorText = "secondary",
}: Pick<ButtonProps, "color" | "colorText"> & { pressed?: boolean }): {
  button: ViewStyle;
  text: TextStyle;
} => ({
  button: {
    backgroundColor: pressed ? hoverColorMapping[color] : colorMapping[color],
    width: 343,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: designSystem.fonts.textSize,
    fontFamily: designSystem.fonts.primaryBold,
    color: textColorMapping[colorText],
  },
});
