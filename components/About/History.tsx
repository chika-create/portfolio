import historyStyles from "@styles/about/history.module.scss";
import { historyData } from "./aboutData";
import { AboutSection } from "./AboutSection";
import { HistoryItem } from "./HistoryItem";

export const History = () => {
  return (
    <AboutSection title="History" contentClassName={historyStyles.historyList}>
      {historyData.map((item) => (
        <HistoryItem key={`${item.period}-${item.company}`} item={item} />
      ))}
    </AboutSection>
  );
};
