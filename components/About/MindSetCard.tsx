import aboutStyles from "@styles/about/about.module.scss";
import { MindSetData } from "./aboutData";

interface MindSetCardProps {
  value: MindSetData;
}

export const MindSetCard = ({ value }: MindSetCardProps) => {
  return (
    <div className={aboutStyles.valueCard}>
      <h3 className={aboutStyles.valueTitle}>{value.title}</h3>
      <p className={aboutStyles.valueText}>{value.text}</p>
    </div>
  );
};
