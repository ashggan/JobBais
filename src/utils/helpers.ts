import { createElement } from "react";

export const isSentenceLongerThan35Words = (sentence: string): number => {
  const words = sentence.split(" ");
  return words.length;
};

export const wrapWordsInSpan = (sentence: string, words: string[]): string => {
  for (const word of words) {
    sentence = sentence.replace(
      word,
      `<span className="text-yellow-500">${word}</span>`
    );
  }
  return sentence;
};

export const renderHTML = (rawHTML: string) =>
  createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
