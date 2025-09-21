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
//alterando parametros da funcao verify token para codigo e email
export async function verifyTwoFactorToken(code: string, email: string) {
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
        //Authorization: `Bearer ${code}`,
      },
      body: JSON.stringify({ token: code, email: email }),
    },
  );

  if (!response.ok) {
    throw new Error("Código inválido");
  }

  return response.json();
}
