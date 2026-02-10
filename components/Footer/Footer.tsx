import Link from "next/link";
import footerStyles from "@styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.menuList}>
        <Link href="/">
          <li className={footerStyles.menuList__item}>TOP</li>
        </Link>
        <Link href="/portfolio">
          <li className={footerStyles.menuList__item}>Portfolio</li>
        </Link>
        <Link href="/profile">
          <li className={footerStyles.menuList__item}>AboutMe</li>
        </Link>
        <Link href="/skill">
          <li className={footerStyles.menuList__item}>MySkillSet</li>
        </Link>
      </ul>
      {/* TODO: 今いるメニューの箇所にmodifireを付与するロジックを追加する */}
      <p className={footerStyles.copyright}>
        <small>&copy; CHIKA MOTOORI {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};
