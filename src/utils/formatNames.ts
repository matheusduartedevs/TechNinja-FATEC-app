export const formatText = (texto: string): string => {
  const correctionsMap: { [key: string]: string } = {
    funcao: "Função",
    funcoes: "Funções",
    logicos: "Lógicos",
    condicionais: "Condicionais",
    facil: "Fácil",
    medio: "Médio",
    dificil: "Difícil",
    "operadores-logicos": "Operadores Lógicos",
    "estrutura-controle": "Estrutura de Controle",
    "lacos-de-repeticao": "Laços de Repetição",
    "operadores-aritmeticos": "Operadores Aritméticos",
    "classes-e-objetos": "Classes e Objetos",
    "tratamento-de-erros": "Tratamento de Erros",
    "tipos-de-dados": "Tipos de Dados",
    "saidas-e-resultados": "Saídas e Resultados",
    "estruturas-condicionais": "Estruturas Condicionais",
  };

  let formattedText = correctionsMap[texto] || texto;

  formattedText = formattedText.replace(/-/g, " ");

  formattedText =
    formattedText.charAt(0).toUpperCase() + formattedText.slice(1);

  const lowercaseWords: string[] = [
    "e",
    "de",
    "do",
    "da",
    "com",
    "para",
    "em",
    "a",
    "o",
  ];

  lowercaseWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    formattedText = formattedText.replace(regex, (match) =>
      match.toLowerCase(),
    );
  });

  return formattedText;
};
