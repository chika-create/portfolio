import historyStyles from "@styles/about/history.module.scss";
import { HistoryData } from "./aboutData";

interface HistoryProps {
  item: HistoryData;
}

export const History = ({ item }: HistoryProps) => {
  return (
    <div className={historyStyles.History}>
      <div className={historyStyles.historyHeader}>
        <span className={historyStyles.period}>{item.period}</span>
        <h3 className={historyStyles.company}>{item.company}</h3>
      </div>
      <div className={historyStyles.historyContents}>
        {item.contents.map((content, idx) => (
          <div key={idx} className={historyStyles.contentBox}>
            <h4 className={historyStyles.contentTitle}>{content.title}</h4>
            <p className={historyStyles.contentText}>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
