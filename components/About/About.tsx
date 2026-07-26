import aboutStyles from "@styles/about/about.module.scss";
import { Profile } from "./Profile";
import { History } from "./History";
import { MindSet} from "./MindSet";

export const About = () => {
  return (
    <div className={aboutStyles.about}>
      <Profile />
      <History />
      <MindSet />
    </div>
  );
};

