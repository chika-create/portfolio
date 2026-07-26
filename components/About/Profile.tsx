import profileStyles from "@styles/about/profile.module.scss";
import { Title } from "@components/parts/Title";
import { ProfileItem } from "./ProfileItem";

export const Profile = () => {
  return (
    <section className={profileStyles.section}>
      <div className={profileStyles.container}>
        <div className={profileStyles.sectionInner}>
          <div className={profileStyles.headingWrapper}>
            <Title level="h2">Personal</Title>
          </div>
          <ProfileItem />
        </div>
      </div>
    </section>
  );
};
