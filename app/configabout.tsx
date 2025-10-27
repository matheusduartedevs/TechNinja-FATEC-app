import { StyleSheet, View, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";
import TextView from "@/src/components/TextView/TextView";

export default function ConfigAbout() {
  return (
    <View style={styles.container}>
      <ActionHeaderView title="Configurações" />

      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <TextView
            text="Este sistema foi desenvolvido com o objetivo de fornecer uma plataforma educacional interativa voltada para usuários interessados em aprender programação de maneira prática e envolvente. Através de quizzes e desafios, os usuários poderão testar seus conhecimentos, aprender novos conceitos e acompanhar seu progresso de maneira dinâmica. A ideia é tornar o aprendizado de programação mais acessível e divertido para iniciantes e para aqueles que buscam aprimorar suas habilidades."
            color="primary"
          />

          <TextView
            text="Este projeto é uma iniciativa acadêmica desenvolvida no primeiro semestre de 2025 pelos alunos da FATEC Diadema. A proposta foi concebida como parte do curso de Desenvolvimento de Software Multiplataforma, com foco em tecnologias web e mobile, sendo integradas com experiência do usuário. O sistema visa criar um ambiente de aprendizado gamificado, onde a interação com quizzes de múltiplas escolhas, além de atividades de codificação prática, proporciona uma experiência de aprendizado completa."
            color="primary"
            style={styles.text}
          />
        </ScrollView>
      </View>

      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 100,
  },
  text: {
    marginTop: 24,
  },
});
