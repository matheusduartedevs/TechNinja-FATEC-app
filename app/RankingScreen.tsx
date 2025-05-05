import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import UserView from "@/src/components/UserView/UserView";

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function App() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.header} />

      <View style={styles.pageContent}>
        {/* Contêiner Flexbox para colocar os componentes lado a lado */}
        <View style={styles.usersRow}>
          <UserView
            icon={require('../assets/icons/icon.png')}
            name="Isabela"
            position="1°"
            badge={require('../assets/icons/golden-badge.png')}
            badgePosition="top"
            style={{ }} // Largura proporcional para 3 componentes
          />
          
          <UserView
            icon={require('../assets/icons/icon.png')}
            name="Lucas"
            position="2°"
            badge={require('../assets/icons/golden-badge.png')}
            badgePosition="top"
            style={{}} // Largura proporcional para 3 componentes
          />

          {/* Terceiro UserView do lado direito */}
          <UserView
            icon={require('../assets/icons/icon.png')}
            name="Mariana"
            position="3°"
            badge={require('../assets/icons/golden-badge.png')}
            badgePosition="top"
            style={{ marginTop: 90, width: (width - 40) / 3 }} // Largura proporcional para 3 componentes
          />
        </View>
      </View>
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
  pageContent: {
    flex: 1,
    justifyContent: 'center', // Alinha os componentes verticalmente no centro
    alignItems: 'center', // Alinha os componentes horizontalmente no centro
    marginTop: 20, // Espaço após o ActionHeader
  },
  usersRow: {
    flexDirection: 'row', // Alinha os componentes UserView lado a lado
    justifyContent: 'space-between', // Distribui os componentes de forma equidistante
    alignItems: 'center', // Alinha os componentes verticalmente
    width: '100%', // Faz com que o contêiner ocupe toda a largura da tela
    paddingHorizontal: 20, // Adiciona espaçamento nas laterais
  },
  userView: {
    flex: 1,
    marginHorizontal: 10, // Ajuste do espaçamento entre os componentes
  },
});
