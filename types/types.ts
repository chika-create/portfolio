import { ReactNode } from "react";

export interface TextData {
  children: ReactNode;
}

export interface TitleProps extends TextData {
  level: "h1" | "h2";
}
