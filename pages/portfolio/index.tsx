import pageStyles from "@styles/common/page.module.scss";
import { PortfolioList } from "@components/PortfolioList";
import { PageMeta } from "@components/PageMeta";
import { CodeSection } from "@components/parts/CodeSection";

export default function PortfolioPage() {
  return (
    <>
      <PageMeta title="Projects | Chika Motoori" description="本告 智香が制作したプロジェクトの一覧です" />
      <main className={pageStyles.main}>
        <CodeSection
          title="プロジェクト"
          sectionClassName={pageStyles.sectionInner}
          openingCode="const projects = () => "
        >
          <PortfolioList />
        </CodeSection>
      </main>
    </>
  );
}
