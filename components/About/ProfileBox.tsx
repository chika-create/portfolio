import aboutStyles from "@styles/about/about.module.scss";
import { ProfileData } from "./aboutData";

interface ProfileBoxProps {
  profileData: ProfileData[];
}

export const ProfileBox = ({ profileData }: ProfileBoxProps) => {
  return (
    <div className={aboutStyles.profileBox}>
      <code className={aboutStyles.codeLine}>const profile = {"{"}</code>
      <ul className={aboutStyles.profileList}>
        {profileData.map((item) => (
          <li key={item.key} className={aboutStyles.profileItem}>
            <span className={aboutStyles.key}>{item.key}:</span>
            <span className={aboutStyles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
      <code className={aboutStyles.codeLine}>{"}"}</code>
    </div>
  );
};
