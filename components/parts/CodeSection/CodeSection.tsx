import type { ReactNode } from "react";
import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";

type CodeSectionProps = {
  title: ReactNode;
  openingCode: ReactNode;
  children: ReactNode;
  closingCode?: ReactNode;
  sectionClassName?: string;
  sectionId?: string;
  titleLevel?: "h1" | "h2" | "h3";
  titleStyle?: "h1" | "h2" | "h3";
};

export const CodeSection = ({
  title,
  openingCode,
  children,
  closingCode = "}",
  sectionClassName,
  sectionId,
  titleLevel = "h2",
  titleStyle = "h1",
}: CodeSectionProps) => {
  return (
    <section id={sectionId} className={sectionClassName}>
      <Title level={titleLevel} style={titleStyle}>{title}</Title>
      <code className={pageStyles.codeText}>{openingCode}</code>
      {children}
      <code className={pageStyles.codeText}>{closingCode}</code>
    </section>
  );
};
