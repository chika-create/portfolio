export const isActivePath = (pathname: string | null, path: string) => pathname === path;

export const getNavItemClassName = (
  baseClassName: string,
  activeClassName: string,
  isActive: boolean,
) => {
  return [baseClassName, isActive ? activeClassName : ""].filter(Boolean).join(" ");
};
