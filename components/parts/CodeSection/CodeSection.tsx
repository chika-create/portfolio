import type { ReactNode } from "react";
import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";

type CodeSectionProps = {
  title?: ReactNode;
  openingCode?: ReactNode;
  children?: ReactNode;
  closingCode?: ReactNode;
  sectionClassName?: string;
  innerClassName?: string;
  sectionId?: string;
  titleLevel?: "h1" | "h2" | "h3";
  titleStyle?: "h1" | "h2" | "h3";
};

export const CodeSection = ({
  title,
  openingCode,
  children,
  closingCode,
  sectionClassName,
  innerClassName,
  sectionId,
  titleLevel = "h2",
  titleStyle = "h1",
}: CodeSectionProps) => {
  const content = (
    <>
      {title && <Title level={titleLevel} style={titleStyle}>{title}</Title>}
      {openingCode && <code className={pageStyles.codeText}>{openingCode}</code>}
      {children}
      {closingCode && <code className={pageStyles.codeText}>{closingCode}</code>}
    </>
  );

  return (
    <section id={sectionId} className={sectionClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
};
