import styles from "@styles/common/page.module.scss";
import top from "@styles/top.module.scss";
import Title from "@components/parts/Title";

function BusinessCard() {
  return (
    <header className={styles.header}>
      <p>Hello world</p>
      <section>
        <div className={top.businessCard}>
          <p className={top.businessCard__job}>Web Creater</p>
          <Title level="h1">本告 智香</Title>
          <p className={top.businessCard__ruby}>CHIKA MOTOORI</p>
          <ul className={top.businessCard__sns}>
            <li className={top.businessCard__snsItem}>
              <a href="#" className={top.businessCard__snsItem__github}>
                GitHub
              </a>
            </li>
            <li className={top.businessCard__snsItem}>
              <a href="#" className={top.businessCard__snsItem__qiita}>
                Qiita
              </a>
            </li>
            <li className={top.businessCard__snsItem}>
              <a href="#" className={top.businessCard__snsItem__x}>
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
