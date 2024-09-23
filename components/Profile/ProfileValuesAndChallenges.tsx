import { Title } from "@components/parts/Title";
import profileStyles from "@styles/profile/profile.module.scss";

export const ProfileValuesAndChallenges = () => {
  return (
    <section className={profileStyles.policy}>
      <div className={profileStyles.policy__title}>
        <Title level="h3">大切にしていること</Title>
      </div>
      <p className={profileStyles.policy__title__business}>Business</p>
      <ul className={profileStyles.policy__text}>
        <li>チームで一体感を持って仕事をする</li>
        <li>双方で配慮、尊重をする</li>
        <li>目的意識を持って仕事をする</li>
      </ul>
      <p className={profileStyles.policy__title__create}>Create</p>
      <ul className={profileStyles.policy__text2}>
        <li>品質とスピードのバランスを考える</li>
        <li>今後の運用を考えて開発をする</li>
      </ul>
      <div className={profileStyles.notGood__title}>
        <Title level="h3">苦手なこと</Title>
      </div>
      <p className={profileStyles.notGood__title__business}>Business</p>
      <ul className={profileStyles.notGood__text}>
        <li>ビジョンを描くこと</li>
      </ul>
      <p className={profileStyles.notGood__title__create}>Create</p>
      <ul className={profileStyles.notGood__text2}>
        <li>デザイン</li>
      </ul>
    </section>
  );
};
