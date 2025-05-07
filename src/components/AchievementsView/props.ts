import { ImageSourcePropType, ViewStyle } from "react-native"; // Adicionando o tipo correto

export interface AchievementsViewProps {
  achievements: ImageSourcePropType[];
  style?: ViewStyle;
  onPress?: () => void;
}
