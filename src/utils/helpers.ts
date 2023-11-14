import { createElement } from "react";
import { ResulsType } from "./types";

export const isSentenceLongerThan35Words = (sentence: string): number => {
  const words = sentence.split(" ");
  return words.length;
};

export const wrapWordsInSpan = (res: ResulsType) => {
  let sentence = res.result;
  const separatedValues = res.swapped_words.map(
    (obj) => Object.values(obj)[0]
  ) as string[];
  for (const word of separatedValues) {
    sentence = sentence.replace(
      word,
      `<span className="bg-yellow-500">${word}</span>`
    );
  }
  console.log(sentence);
  return renderHTML(sentence);
};

export const renderHTML = (rawHTML: string) =>
  createElement("div", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
