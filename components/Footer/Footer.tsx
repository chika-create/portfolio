import footerStyles from "../../styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.menuList}>
        <li className={footerStyles.menuList__item}>TOP</li>
        <li className={footerStyles.menuList__item}>Portfolio</li>
        <li className={footerStyles.menuList__item}>AboutMe</li>
        <li className={footerStyles.menuList__item}>MySkillSet</li>
      </ul>
      {/* TODO: 今いるメニューの箇所にmodifireを付与するロジックを追加する */}
      <p className={footerStyles.copyright}>
        <small>&copy; CHIKA MOTOORI 2024</small>
      </p>
    </footer>
  );
};
