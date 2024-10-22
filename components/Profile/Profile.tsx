import { ProfileBasicInfo } from "@components/Profile/ProfileBasicInfo";
import { ProfileExperience } from "@components/Profile/ProfileExperience";
import { ProfileValuesAndChallenges } from "@components/Profile/ProfileValuesAndChallenges";

export const Profile = () => {
  return (
    <>
      <ProfileBasicInfo />
      <ProfileExperience />
      <ProfileValuesAndChallenges />
    </>
  );
};
