import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface TextDataInterface {
  children: ReactNode;
}

export interface TitleInterface extends TextDataInterface {
  level: "h1" | "h2" | "h3";
}

export interface ButtonInterface {
  children: string;
}

export interface SnsLink {
  id: string;
  url: string;
  image: string;
}

export type SkillItem = {
  name: string;
  level: number;
  description: string;
};

export type SkillCategory = {
  label: string;
  title: string;
  items: SkillItem[];
};

export type LevelGuideItem = {
  score: number;
  title: string;
  description: string;
};

export interface TopSkillItem {
  name: string;
  color: string;
  Icon: IconType;
}

