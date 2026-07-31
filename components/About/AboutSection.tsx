import type { ReactNode } from "react";
import layoutStyles from "@styles/about/layout.module.scss";
import { Title } from "@components/parts/Title";

type AboutSectionProps = {
  title: string;
  children: ReactNode;
  contentClassName?: string;
};

export const AboutSection = ({
  title,
  children,
  contentClassName,
}: AboutSectionProps) => {
  const content = contentClassName
    ? <div className={contentClassName}>{children}</div>
    : children;

  return (
    <section className={layoutStyles.section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.sectionInner}>
          <div className={layoutStyles.headingWrapper}>
            <Title level="h2">{title}</Title>
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};
