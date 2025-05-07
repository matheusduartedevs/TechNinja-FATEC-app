import designSystem from "@/src/styles/theme";
import { TitleViewProps } from "@/src/components/TitleView/props";

export const styles = ({ color }: Pick<TitleViewProps, "color">) => ({
  fontSize: designSystem.fonts.textSize,
  fontFamily: designSystem.fonts.primaryRegular,
  color:
    color === "primary"
      ? designSystem.colors.text.primary
      : designSystem.colors.text.secondary,
});
