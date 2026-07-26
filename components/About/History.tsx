import historyStyles from "@styles/about/history.module.scss";
import { Title } from "@components/parts/Title";
import { historyData } from "./aboutData";
import { HistoryItem } from "./HistoryItem";

export const History = () => {
  return (
      <section className={historyStyles.section}>
        <div className={historyStyles.container}>
          <div className={historyStyles.sectionInner}>
            <div className={historyStyles.headingWrapper}>
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
