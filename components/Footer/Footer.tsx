import Link from "next/link";
import footerStyles from "@styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <ul className={footerStyles.menuList}>
          <li className={footerStyles.menuList__item}>
            <Link href="/">TOP</Link>
          </li>
          <li className={footerStyles.menuList__item}>
            <Link href="/portfolio">Projects</Link>
          </li>
          <li className={footerStyles.menuList__item}>
            <Link href="/">About</Link>
          </li>
          <li className={footerStyles.menuList__item}>
            <Link href="/skillset">SkillSet</Link>
          </li>
        </ul>
        {/* TODO: 今いるメニューの箇所にmodifireを付与するロジックを追加する？ */}
        <p className={footerStyles.copyright}>
          <small>&copy; CHIKA MOTOORI {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};
