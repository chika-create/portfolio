import layoutStyles from "@styles/about/layout.module.scss";
import { Title } from "@components/parts/Title";
import { ProfileItem } from "./ProfileItem";

export const Profile = () => {
  return (
    <section className={layoutStyles.section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.sectionInner}>
          <div className={layoutStyles.headingWrapper}>
            <Title level="h2">Personal</Title>
          </div>
          <ProfileItem />
        </div>
      </div>
    </section>
  );
};
