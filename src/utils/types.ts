import { ReactNode } from "react";

export interface ResulsType {
  message: messageType;
}

export interface messageType {
  predicted_label: string;
  result: string;
  swapped_words: SwappedWord[];
}

export interface SwappedWord {
  driven?: string;
  strong?: string;
  he?: string;
  resilient?: string;
  understand?: string;
  sympathy?: string;
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
