export const safeFunctionParse = (functionString: string) => {
  return Function(`"use strict"; return ${functionString};`)();
};

export const toSentenceCase = (word: string) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const generateId = (): string => {
  return Math.random().toString(16).slice(2);
};

export const minifyFunctionToString = (func: any) => {
  const funcString = func.toString();
  const minifiedCode = funcString
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Remove comments
    .replace(/\s+/g, " "); // Remove unnecessary whitespace
  return minifiedCode;
};
