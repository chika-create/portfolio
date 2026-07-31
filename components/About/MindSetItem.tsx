import mindSetItemStyles from "@styles/about/mindSetItem.module.scss";
import { MindSetData } from "./aboutData";

interface MindSetItemProps {
  value: MindSetData;
}

export const MindSetItem = ({ value }: MindSetItemProps) => {
  return (
    <div className={mindSetItemStyles.valueCard}>
      <h3 className={mindSetItemStyles.valueTitle}>{value.title}</h3>
      <p className={mindSetItemStyles.valueText}>{value.text}</p>
    </div>
  );
};
