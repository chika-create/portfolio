import profileStyles from "@styles/about/profile.module.scss";
import { ProfileData } from "./aboutData";

interface ProfileProps {
  profileData: ProfileData[];
}

export const Profile = ({ profileData }: ProfileProps) => {
  return (
    <div className={profileStyles.Profile}>
      <code className={profileStyles.codeLine}>const profile = {"{"}</code>
      <ul className={profileStyles.profileList}>
        {profileData.map((item) => (
          <li key={item.key} className={profileStyles.profileItem}>
            <span className={profileStyles.key}>{item.key}:</span>
            <span className={profileStyles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
      <code className={profileStyles.codeLine}>{"}"}</code>
    </div>
  );
};
