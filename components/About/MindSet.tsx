import mindSetStyles from "@styles/about/mindSet.module.scss";
import { MindSetData } from "./aboutData";
import { MindSetItem} from "./MindSetItem";
import { valueData } from "./aboutData";
import { Title } from "@components/parts/Title";

export const MindSet = () => {
  return (
      <section className={mindSetStyles.section}>
        <div className={mindSetStyles.container}>
          <div className={mindSetStyles.sectionInner}>
            <div className={mindSetStyles.headingWrapper}>
              <Title level="h2">MindSet</Title>
            </div>
            <div className={mindSetStyles.valueList}>
              {valueData.map((value, index) => (
                <MindSetItem key={index} value={value} />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
