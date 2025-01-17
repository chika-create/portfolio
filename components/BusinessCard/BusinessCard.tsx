import businessCardStyles from "@styles/top/businessCard.module.scss";
import { snsLinks } from "@constants/snsLink";

export const BusinessCard = () => {
  return (
    <section>
      <div className={businessCardStyles.businessCard}>
        <p className={businessCardStyles.businessCard__job}>Web Creator</p>
        <h1 className={businessCardStyles.businessCard__name}>本告 智香</h1>
        <p className={businessCardStyles.businessCard__ruby}>CHIKA MOTOORI</p>
        {snsLinks.length > 0 && (
          <ul className={businessCardStyles.businessCard__sns}>
            {snsLinks.map((link) => (
              <li key={link.id} className={businessCardStyles.businessCard__snsItem}>
                <a
                  href={link.url}
                  className={businessCardStyles.businessCard__snsItemLink}
                  target="_blank"
                >
                  <img
                    src={`/images/` + link.image}
                    className={businessCardStyles.businessCard__snsItemIcon}
                    width="auto"
                    height={16}
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
