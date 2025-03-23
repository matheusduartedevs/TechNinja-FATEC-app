import designSystem from "@/app/styles/theme";
import { TitleViewProps } from "@/app/components/TitleView/props";

export const styles = ({ color }: Pick<TitleViewProps, "color">) => ({
  fontSize: designSystem.fonts.titleSize,
  color:
    color === "primary"
      ? designSystem.colors.text.primary
      : designSystem.colors.text.secondary,
});
