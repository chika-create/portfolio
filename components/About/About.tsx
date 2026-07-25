import aboutStyles from "@styles/about/about.module.scss";
import { Title } from "@components/parts/Title";
import { profileData, historyData, valueData } from "./aboutData";
import { ProfileBox } from "./ProfileBox";
import { HistoryItem } from "./HistoryItem";
import { MindSetCard } from "./MindSetCard";

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
            <ProfileBox profileData={profileData} />
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
                <HistoryItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MindSet Section */}
      <section className={aboutStyles.section}>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.sectionInner}>
            <div className={aboutStyles.headingWrapper}>
              <Title level="h2">MindSet</Title>
            </div>
            <div className={aboutStyles.valueList}>
              {valueData.map((value, index) => (
                <MindSetCard key={index} value={value} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

