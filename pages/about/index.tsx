import type { Metadata } from "next";
import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { About as AboutComponent } from "@components/About";

export const metadata: Metadata = {
  title: "About | Chika Motoori",
  description: "本告 智香についての紹介ページです",
};

export default function AboutPage() {
  return (
    <main className={pageStyles.main}>
      <section>
        <Title level="h2">私について（工事中）</Title>
        <code className={pageStyles.codeText}>const AboutMe = () =&gt; </code>
        <AboutComponent />
        <Button href="/">return TOP;</Button>
        <code className={pageStyles.codeText}>{"}"}</code>
      </section>
    </main>
  );
}
