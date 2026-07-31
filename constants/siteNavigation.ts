export type NavigationItem = {
  href: `/${string}`;
  label: string;
};

export const siteNavigation: NavigationItem[] = [
  { href: "/", label: "TOP" },
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skillset", label: "SkillSet" },
];
