import footerstyles from "@styles/footer.module.scss";

function Footer() {
  return (
    <footer className={footerstyles.footer}>
      <ul className={footerstyles.menuList}>
        <li className={footerstyles.menuList__item}>TOP</li>
        <li className={footerstyles.menuList__item}>Portfolio</li>
        <li className={footerstyles.menuList__item}>AboutMe</li>
        <li className={footerstyles.menuList__item}>MySkillSet</li>
      </ul>
      {/* TODO: 今いるメニューの箇所にmodifireを付与するロジックを追加する */}
      <p className={footerstyles.copyright}>
        <small>&copy; CHIKA MOTOORI 2024</small>
      </p>
    </footer>
  );
}

export default Footer;
