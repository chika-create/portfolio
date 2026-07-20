import { Title } from "@components/parts/Title";
import aboutStyles from "@styles/about/aboutValuesAndChallenges.module.scss";

export const AboutValuesAndChallenges = () => {
  return (
    <>
      <section className={aboutStyles[`value`]}>
        <div className={aboutStyles[`value__title`]}>
          <Title level="h3">大切にしていること</Title>
        </div>
        <p className={aboutStyles[`value__title--business`]}>Business</p>
        <ul className={aboutStyles[`value--business`]}>
          <li>チームで一体感を持って仕事をする</li>
          <li>双方で配慮、尊重をする</li>
          <li>目的意識を持って仕事をする</li>
        </ul>
        <p className={aboutStyles[`value__title--create`]}>Create</p>
        <ul className={aboutStyles[`value--create`]}>
          <li>品質とスピードのバランスを考える</li>
          <li>今後の運用を考えて開発をする</li>
        </ul>
      </section>

      <section className={aboutStyles[`challenge`]}>
        <div className={aboutStyles[`challenge__title--challenge`]}>
          <Title level="h3">苦手なこと</Title>
        </div>
        <p className={aboutStyles[`challenge__title--business`]}>Business</p>
        <ul className={aboutStyles[`challenge--business`]}>
          <li>ビジョンを描くこと</li>
        </ul>
        <p className={aboutStyles[`challenge__title--create`]}>Create</p>
        <ul className={aboutStyles[`challenge--create`]}>
          <li>デザイン</li>
        </ul>
      </section>
    </>
  );
};
