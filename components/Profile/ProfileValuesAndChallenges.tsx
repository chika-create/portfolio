import { Title } from "@components/parts/Title";
import profileStyles from "@styles/profile/profile.module.scss";

export const ProfileValuesAndChallenges = () => {
  return (
    <section className={profileStyles.profile}>
      <div className={profileStyles[`profile__title--value`]}>
        <Title level="h3">大切にしていること</Title>
      </div>
      <p className={profileStyles[`profile__valueTitle--business`]}>Business</p>
      <ul className={profileStyles[`profile__value--business`]}>
        <li>チームで一体感を持って仕事をする</li>
        <li>双方で配慮、尊重をする</li>
        <li>目的意識を持って仕事をする</li>
      </ul>
      <p className={profileStyles[`profile__valueTitle--create`]}>Create</p>
      <ul className={profileStyles[`profile__value--create`]}>
        <li>品質とスピードのバランスを考える</li>
        <li>今後の運用を考えて開発をする</li>
      </ul>
      <div className={profileStyles[`profile__title--challenge`]}>
        <Title level="h3">苦手なこと</Title>
      </div>
      <p className={profileStyles[`profile__challengeTitle--business`]}>Business</p>
      <ul className={profileStyles[`profile__challenge--business`]}>
        <li>ビジョンを描くこと</li>
      </ul>
      <p className={profileStyles[`profile__challengeTitle--create`]}>Create</p>
      <ul className={profileStyles[`profile__challenge--create`]}>
        <li>デザイン</li>
      </ul>
    </section>
  );
};
