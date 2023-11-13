import { ReactNode } from "react";

export interface ResulsType {
  predicted_label: string;
  result: string;
  swapped_words: string[];
}

export interface ResultsPropType {
  results: ResulsType | null;
}

export interface headingProb {
  title: string;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeContextProbs {
  children: ReactNode;
}
