import { Title } from "@components/parts/Title";
import { snsLinks } from "@constants/snsLink";
import profileStyles from "@styles/profile/profile.module.scss";

export const ProfileBasicInfo = () => {
  return (
    <>
      <div className={profileStyles.profile}>
        <div className={profileStyles[`profile__title--basicInfo`]}>
          <Title level="h3">Personal</Title>
        </div>
        <div className={profileStyles[`profile--basicInfo`]}>
          <ul className={profileStyles.basicInfo__list}>
            <li className={profileStyles.basicInfo__listItem}>
              本告 智香（モトオリ チカ）
            </li>
            <li className={profileStyles.basicInfo__listItem}>兵庫県在住</li>
            <li className={profileStyles.basicInfo__listItem}>
              1988年11月生まれ
            </li>
            <li className={profileStyles.basicInfo__listItem}>
              株式会社エイチームライフデザイン 所属
            </li>
            <li className={profileStyles.basicInfo__listItem}>
              <a
                href="https://www.16personalities.com/ja/esfj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"
                target="_blank"
                rel="noopener noreferrer"
              >
                ESFJ
              </a>
            </li>
          </ul>
          {snsLinks.length > 0 && (
            <ul>
              {snsLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/` + link.image} width="auto" height={16} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
