import aboutStyles from "@styles/about/about.module.scss";
import { Title } from "@components/parts/Title";
import { profileData, historyData, valueData } from "./aboutData";
import { Profile } from "./Profile";
import { History } from "./History";
import { MindSet} from "./MindSet";

export const About = () => {
  return (
    <div className={aboutStyles.about}>
      {/* Personal Section */}
      <section className={aboutStyles.section}>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.sectionInner}>
            <div className={aboutStyles.headingWrapper}>
              <Title level="h2">Personal</Title>
            </div>
            <Profile profileData={profileData} />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={aboutStyles.section}>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.sectionInner}>
            <div className={aboutStyles.headingWrapper}>
              <Title level="h2">History</Title>
            </div>
            <div className={aboutStyles.historyList}>
              {historyData.map((item, index) => (
                <History key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MindSet />
    </div>
  );
};

