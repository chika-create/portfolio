import historyStyles from "@styles/about/history.module.scss";
import layoutStyles from "@styles/about/layout.module.scss";
import { Title } from "@components/parts/Title";
import { historyData } from "./aboutData";
import { HistoryItem } from "./HistoryItem";

export const History = () => {
  return (
      <section className={layoutStyles.section}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.sectionInner}>
            <div className={layoutStyles.headingWrapper}>
              <Title level="h2">History</Title>
            </div>
            <div className={historyStyles.historyList}>
              {historyData.map((item, index) => (
                <HistoryItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

  );
};
