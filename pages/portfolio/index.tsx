import type { Metadata } from "next";
import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { PortfolioList } from "@components/PortfolioList";

export const metadata: Metadata = {
  title: "Projects | Chika Motoori",
  description: "本告 智香が制作したプロジェクトの一覧です",
};

export default function PortfolioPage() {
  return (
    <main className={pageStyles.main}>
      <section className={pageStyles.sectionInner}>
        <Title level="h2" style="h1">プロジェクト</Title>
        <code className={pageStyles.codeText}>const projects = () =&gt; </code>
        <PortfolioList />
        <code className={pageStyles.codeText}>{"}"}</code>
      </section>
    </main>
  );
}
