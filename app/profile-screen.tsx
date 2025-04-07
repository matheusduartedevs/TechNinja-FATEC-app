import { Alert, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import UserView from "@/src/components/UserView/UserView";
import PointsView from "@/src/components/PointsView/PointsView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import TitleView from "@/src/components/TitleView/TitleView";

export default function App() {
  return (
    
    <View style={styles.container}>
        <TitleView
          title="Isabela"
          color="primary"
          style={{marginLeft: 150}}
        />
        <UserView
            icon={require('../assets/icons/icon.png')}
            name="Isabela"
            position="1°"
            badge={require('../assets/icons/golden-badge.png')}
            badgePosition="top"
            style={{marginLeft: 100, marginTop: 90}}
         />
         <PointsView
          points="20"
          background="primary"
          style={{marginLeft: 150, marginTop: 60, backgroundColor:"green"}}
         />
         <PointsView
          points="20"
          background="primary"
          style={{marginLeft: 60, marginTop: 5, backgroundColor:"green"}}
         />
         <PointsView
          points="20"
          background="primary"
          style={{marginLeft: 240, marginTop: -38, backgroundColor:"green"}}
         />
         <AchievementsView
            achievements={[require('../assets/icons/badge1.png'), require('../assets/icons/badge2.png'), require('../assets/icons/badge3.png')]}
            style={{marginLeft: 20, marginBottom: 30, marginTop: 60}}
         />
         <FooterView
          onClick={alert}
          style={{marginLeft: 10, marginBottom:20}}
         />
         
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
})
