import { TitleProps } from "../../types/types";

function Title({ children, level }: TitleProps) {
  const HeadingTag = level;
  return <HeadingTag>{children}</HeadingTag>;
}

export default Title;
