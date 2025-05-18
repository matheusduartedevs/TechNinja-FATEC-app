interface Subtheme {
  name: string;
  pontos: number;
}

interface Level {
  area: string;
  subtheme: string;
  level: string;
}

export async function getSubThemes(area: string): Promise<Subtheme[]> {
  try {
    const response = await fetch(
      `${
        process.env.EXPO_PUBLIC_MODE === "development"
          ? process.env.EXPO_PUBLIC_API_URL_DEV
          : process.env.EXPO_PUBLIC_API_URL_PROD
      }/api/quiz/${area}`,
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar subtemas: ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((subtheme: any) => ({
      name: subtheme.subtema || subtheme.name || "Desconhecido",
      pontos: subtheme.pontos || 0,
    }));
  } catch (error) {
    return [];
  }
}

export async function getLevels(
  area: string,
  subtheme: string,
): Promise<Level[]> {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/quiz/${area}/${subtheme}/dificuldades`,
  );
  return response.json();
}

export async function getCompletedQuizzes(user: string) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/user-quizzes-completed`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user}`,
      },
    },
  );
  return response.json();
}

export async function getQuiz(area: string, subtheme: string, level: string) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/quiz/${area}/${subtheme}/${level}`,
  );

  return response.json();
}

export async function updateScore(user: string, points: number) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/update-score`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify({ points }),
    },
  );
  return response.json();
}

export async function markQuizCompleted(
  user: string,
  area: string,
  subtheme: string,
  level: string,
) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/mark-quiz-completed`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify({ area, subtheme, level }),
    },
  );
  return response.json();
}
