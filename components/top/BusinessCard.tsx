import businessCard from "@styles/top/businessCard.module.scss";
import Title from "@components/parts/Title";

const snsLinks = [
  { name: "GitHub", url: "https://github.com/chika-create" },
  { name: "Qiita", url: "https://qiita.com/chika_hoge" },
  { name: "X", url: "https://twitter.com/chika_hoge" },
];

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
            {snsLinks.map((link) => (
              <li className={businessCard.businessCard__snsItem}>
                <a
                  href={link.url}
                  className={businessCard.businessCard__snsItem__github}
                  target="_blank"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </header>
  );
}

export default BusinessCard;
