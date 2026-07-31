import mindSetStyles from "@styles/about/mindSet.module.scss";
import { MindSetItem } from "./MindSetItem";
import { valueData } from "./aboutData";
import { AboutSection } from "./AboutSection";

export const MindSet = () => {
  return (
    <AboutSection title="MindSet" contentClassName={mindSetStyles.valueList}>
      {valueData.map((value) => (
        <MindSetItem key={value.title} value={value} />
      ))}
    </AboutSection>
  );
};
