import designSystem from "@/src/styles/theme";
import { TitleViewProps } from "@/src/components/TitleView/props";

export const styles = ({
  color,
  lowVisionMode,
}: Pick<TitleViewProps, "color"> & { lowVisionMode: boolean }) => ({
  fontSize: lowVisionMode
    ? designSystem.fonts.lowVisionTextSize
    : designSystem.fonts.textSize,
  fontFamily: designSystem.fonts.primaryRegular,
  color:
    color === "primary"
      ? designSystem.colors.text.primary
      : designSystem.colors.text.secondary,
});
