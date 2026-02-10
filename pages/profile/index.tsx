import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { Footer } from "@components/Footer";
import { Profile as ProfileComponent } from "@components/Profile";

export default function Profile() {
  return (
    <>
      <header className={pageStyles.header}>hoge</header>
      <main className={pageStyles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={pageStyles.codeText}>const AboutMe = () ={'>'} </code>
          <ProfileComponent />
          <Button>return TOP;</Button>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
