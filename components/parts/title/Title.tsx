import { TitleProps } from "types/types";
import titleStyles from "../../../styles/parts/title.module.scss";

export const Title = ({ level, children }: TitleProps) => {
  const HeadingTag = level;
  const headingClassName = titleStyles[level];
  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
};
