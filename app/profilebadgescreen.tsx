import React from "react";
import { StyleSheet, View,} from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import FooterView from "@/src/components/FooterView/FooterView";


export default function App() {
  return (
    <View style={styles.container}>
      <ActionHeaderView title="Isabela" style={styles.header} />
      <AchievementsView
        achievements={[require('../assets/icons/badge1.png'), require('../assets/icons/badge2.png'), require('../assets/icons/badge3.png'), ]}
        style={{marginTop:-400}}   
      />
      <FooterView
          onClick={alert}
          style={{marginLeft: 10, marginBottom:20}}
         />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinha o componente verticalmente no centro
    alignItems: 'center', // Alinha o componente horizontalmente no centro
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 60,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
});