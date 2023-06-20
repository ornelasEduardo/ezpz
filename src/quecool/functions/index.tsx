export const safeFunctionParse = (functionString: string) => {
  return Function(`"use strict"; return ${functionString};`)();
};

export const toSentenceCase = (word: string) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

export const generateId = (): string => {
  return Math.random().toString(16).slice(2);
};
