export async function generateTwoFactorSecret(email: string) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/generate-secret`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao gerar secret 2FA");
  }

  return response.json();
}

export async function verifyTwoFactorToken(token: string, code: string) {
  const response = await fetch(
    `${
      process.env.EXPO_PUBLIC_MODE === "development"
        ? process.env.EXPO_PUBLIC_API_URL_DEV
        : process.env.EXPO_PUBLIC_API_URL_PROD
    }/api/verify-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token: code }),
    },
  );

  if (!response.ok) {
    throw new Error("Código inválido");
  }

  return response.json();
}
