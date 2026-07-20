import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { Footer } from "@components/Footer";
import { About as AboutComponent } from "@components/About";

export default function About() {
  return (
    <>
      <main className={pageStyles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={pageStyles.codeText}>const AboutMe = () ={'>'} </code>
          <AboutComponent />
          <Button href="/">return TOP;</Button>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
