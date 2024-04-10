import { TitleProps } from "@types/types";
import styles from "@styles/parts/title.module.scss";

export const Title = ({ level, children }: TitleProps) => {
  const HeadingTag = level;
  const headingClassName = styles[level];
  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
};
