import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import UserView from "@/src/components/UserView/UserView";
import RankingCardView from "@/src/components/RankingCardView/RankingCardView";
import FooterView from "@/src/components/FooterView/FooterView";
import { useAuth } from "@/src/hooks/AuthContext";
import defaultIcon from "@/assets/icons/logo.png";
import medalGolden from "@/assets/badges/golden.png";
import medalSilver from "@/assets/badges/silver.png";
import medalBronze from "@/assets/badges/bronze.png";


const positionMap: Record<string, "1°" | "2°" | "3°"> = {
  "1": "1°",
  "2": "2°",
  "3": "3°",
};

const badgeMap = {
  "1°": medalGolden,
  "2°": medalSilver,
  "3°": medalBronze,
};

export default function RankingScreen() {
  const { token } = useAuth();
  const [rankingData, setRankingData] = useState<
    {
      id: string;
      nome: string;
      pontuacao: number;
      avatar?: string;
      ranking: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Busca ranking da API
  const fetchRanking = async () => {
    if (!token) return;

    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_MODE === "development"
            ? process.env.EXPO_PUBLIC_API_URL_DEV
            : process.env.EXPO_PUBLIC_API_URL_PROD
        }/api/users/ranking`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Erro ao carregar ranking");

      const data = await response.json();
      setRankingData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRanking();
  }, [token]);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color={designSystem.colors.action.primary} />
      </View>
    );
  }

  // Separar os top 3 para UserView e os demais para RankingCardView
  const top3 = rankingData.slice(0, 3);

  const reorderedTop3 = [top3[1], top3[0], top3[2]];


  const others = rankingData.slice(3);

  return (
    <View style={styles.container}>
      <ActionHeaderView title={"Ranking"} />

      <View style={styles.pageContent}>
        <View style={styles.usersRow}>
          {reorderedTop3.map((user, index) => (
            <View
              key={user.id}
              style={index === 1 ? { marginBottom: 45 } : undefined} // o do meio tem margin bottom maior
            >
              <UserView
                icon={user.avatar ? { uri: user.avatar } : defaultIcon}
                name={user.nome}
                position={positionMap[user.ranking] ?? undefined}
                badge={badgeMap[positionMap[user.ranking] ?? ""]}
                badgePosition="top"
                size={index === 1 ? "medium" : "small"}
              />
            </View>
          ))}
        </View>

        {others.map((user, index) => (
          <RankingCardView
            key={user.id}
            position={index + 4}
            icon={user.avatar ? { uri: user.avatar } : defaultIcon} // se não tiver avatar, não passa prop icon
            name={user.nome}
            points={`${user.pontuacao}`}
          />
        ))}

        <FooterView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  pageContent: {
    flex: 1,
    alignItems: "center",
  },
  usersRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 50,
    alignItems: "flex-end",
  },
});
