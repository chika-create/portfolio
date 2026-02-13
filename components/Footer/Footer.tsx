import Link from "next/link";
import footerStyles from "@styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.menuList}>
        <li className={footerStyles.menuList__item}>
          <Link href="/">TOP</Link>
        </li>
        <li className={footerStyles.menuList__item}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={footerStyles.menuList__item}>
          <Link href="/profile">AboutMe</Link>
        </li>
        <li className={footerStyles.menuList__item}>
          <Link href="/skill">MySkillSet</Link>
        </li>
      </ul>
      {/* TODO: 今いるメニューの箇所にmodifireを付与するロジックを追加する */}
      <p className={footerStyles.copyright}>
        <small>&copy; CHIKA MOTOORI {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};
