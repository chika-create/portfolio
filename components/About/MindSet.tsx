import mindSetStyles from "@styles/about/mindSet.module.scss";
import layoutStyles from "@styles/about/layout.module.scss";
import { MindSetItem} from "./MindSetItem";
import { valueData } from "./aboutData";
import { Title } from "@components/parts/Title";

export const MindSet = () => {
  return (
      <section className={layoutStyles.section}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.sectionInner}>
            <div className={layoutStyles.headingWrapper}>
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
