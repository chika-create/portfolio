import aboutStyles from "@styles/about/about.module.scss";
import { HistoryData } from "./aboutData";

interface HistoryItemProps {
  item: HistoryData;
}

export const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <div className={aboutStyles.historyItem}>
      <div className={aboutStyles.historyHeader}>
        <span className={aboutStyles.period}>{item.period}</span>
        <h3 className={aboutStyles.company}>{item.company}</h3>
      </div>
      <div className={aboutStyles.historyContents}>
        {item.contents.map((content, idx) => (
          <div key={idx} className={aboutStyles.contentBox}>
            <h4 className={aboutStyles.contentTitle}>{content.title}</h4>
            <p className={aboutStyles.contentText}>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
