import { LevelGuideItem } from "types/types";
import levelGuideStyles from "@styles/skill/LevelGuide.module.scss";

interface LevelGuideProps {
  levelGuide: LevelGuideItem[];
}

export const LevelGuide = ({ levelGuide }: LevelGuideProps) => {
  return (
    <div className={levelGuideStyles.levelGuide}>
      <p className={levelGuideStyles.levelGuide__title}>5段階評価</p>
      <ul className={levelGuideStyles.levelGuideList}>
        {levelGuide.map((item) => (
          <li key={item.score} className={levelGuideStyles.levelGuideList__item}>
            <span className={levelGuideStyles.levelGuideList__itemScore}>{item.score}.</span>
            <div>
              <p className={levelGuideStyles.levelGuideList__itemTitle}>{item.title}</p>
              <p className={levelGuideStyles.levelGuideList__itemDescription}>
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};