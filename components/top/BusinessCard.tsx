import businessCard from "@styles/top/businessCard.module.scss";
import Title from "@components/parts/Title";

function BusinessCard() {
  return (
    <header className={businessCard.header}>
      <p>Hello world</p>
      <section>
        <div className={businessCard.businessCard}>
          <p className={businessCard.businessCard__job}>Web Creater</p>
          <Title level="h1">本告 智香</Title>
          <p className={businessCard.businessCard__ruby}>CHIKA MOTOORI</p>
          <ul className={businessCard.businessCard__sns}>
            <li className={businessCard.businessCard__snsItem}>
              <a
                href="#"
                className={businessCard.businessCard__snsItem__github}
              >
                GitHub
              </a>
            </li>
            <li className={businessCard.businessCard__snsItem}>
              <a href="#" className={businessCard.businessCard__snsItem__qiita}>
                Qiita
              </a>
            </li>
            <li className={businessCard.businessCard__snsItem}>
              <a href="#" className={businessCard.businessCard__snsItem__x}>
                X
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default BusinessCard;
