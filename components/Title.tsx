import { TitleProps } from "@types/types";
import styles from "@styles/title.module.scss";

function Title({ level, children }: TitleProps) {
  const HeadingTag = level;
  const headingClassName = styles[level];
  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
}

export default Title;
