import businessCard from "@styles/top/businessCard.module.scss";
import { snsLinks } from "../../constants/snsLink";

export const BusinessCard = () => {
  return (
    <header className={businessCard.header}>
      <p>Hello world</p>
      <section>
        <div className={businessCard.businessCard}>
          <p className={businessCard.businessCard__job}>Web Creator</p>
          <h1 className={businessCard.businessCard__name}>本告 智香</h1>
          <p className={businessCard.businessCard__ruby}>CHIKA MOTOORI</p>
          <ul className={businessCard.businessCard__sns}>
            {snsLinks.map((link) => (
              <li className={businessCard.businessCard__snsItem}>
                <a
                  href={link.url}
                  className={businessCard.businessCard__snsItemLink}
                  target="_blank"
                >
                  <img
                    src={`/images/` + link.image}
                    className={businessCard.businessCard__snsItemIcon}
                    width="auto"
                    height={16}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
};

// export default BusinessCard;
