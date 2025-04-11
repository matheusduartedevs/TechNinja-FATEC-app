interface Subtheme {
  name: string;
}

interface Level {
  area: string;
  subtheme: string;
  level: string;
}

async function getSubThemes(area: string): Promise<Subtheme[]> {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/quiz/${area}`,
  );
  return response.json();
}
async function getLevels(area: string, subtheme: string): Promise<Level[]> {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/quiz/${area}/${subtheme}/dificuldades`,
  );
  return response.json();
}

async function getCompletedQuizzes(user: string) {
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

async function getQuiz(area: string, subtheme: string, level: string) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/quiz/${area}/${subtheme}/${level}`,
  );

  return response.json;
}

async function updateScore(user: string, points: number) {
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

async function markQuizCompleted(
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

export default {
  getSubThemes,
  getLevels,
  getCompletedQuizzes,
  getQuiz,
  updateScore,
  markQuizCompleted,
};
