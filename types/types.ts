import { ReactNode } from "react";

export interface TextDataInterface {
  children: ReactNode;
}

export interface TitleInterface extends TextDataInterface {
  level: "h1" | "h2" | "h3";
}

export interface ButtonInterface {
  children: string;
}
