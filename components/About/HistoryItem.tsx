import historyItemStyles from "@styles/about/historyItem.module.scss";
import { HistoryData } from "./aboutData";

interface HistoryItemProps {
  item: HistoryData;
}

export const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <div className={historyItemStyles.HistoryItem}>
      <div className={historyItemStyles.HistoryItemHeader}>
        <span className={historyItemStyles.period}>{item.period}</span>
        <h3 className={historyItemStyles.company}>{item.company}</h3>
      </div>
      <div className={historyItemStyles.HistoryItemContents}>
        {item.contents.map((content, idx) => (
          <div key={idx} className={historyItemStyles.contentBox}>
            <h4 className={historyItemStyles.contentTitle}>{content.title}</h4>
            <p className={historyItemStyles.contentText}>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
