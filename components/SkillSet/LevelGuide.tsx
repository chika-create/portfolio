import { LevelGuideItem } from "types/types";
import levelGuideStyles from "@styles/skillset/levelGuide.module.scss";

interface LevelGuideProps {
  levelGuide: LevelGuideItem[];
}

export const LevelGuide = ({ levelGuide }: LevelGuideProps) => {
  return (
    <ol className={levelGuideStyles.levelGuideList}>
      {levelGuide.map((item) => (
        <li key={item.score} className={levelGuideStyles.levelGuideList__item}>
          <div>
            <p className={levelGuideStyles.levelGuideList__itemTitle}>{item.title}</p>
            <p className={levelGuideStyles.levelGuideList__itemDescription}>
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};
