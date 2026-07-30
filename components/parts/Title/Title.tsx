import { TitleInterface } from "@types/types";
import titleStyles from "@styles/parts/title.module.scss";

export const Title = ({ 
  level: HeadingTag, 
  style, 
  children 
}: TitleInterface) => {
  const selectedStyle = style || HeadingTag; 
  const headingClassName = titleStyles[selectedStyle];

  return <HeadingTag className={headingClassName}>{children}</HeadingTag>;
};
