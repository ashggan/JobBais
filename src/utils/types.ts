import { ReactNode } from "react";

export type headingProb = {
  title: string;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type ThemeContextProbs = {
  children: ReactNode;
};
