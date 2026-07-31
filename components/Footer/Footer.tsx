"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import footerStyles from "@styles/footer.module.scss";

export const Footer = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <ul className={footerStyles.menuList}>
          <li className={`${footerStyles.menuList__item} ${isActive("/") ? footerStyles.active : ""}`}>
            <Link href="/">TOP</Link>
          </li>
          <li className={`${footerStyles.menuList__item} ${isActive("/portfolio") ? footerStyles.active : ""}`}>
            <Link href="/portfolio">Projects</Link>
          </li>
          <li className={`${footerStyles.menuList__item} ${isActive("/about") ? footerStyles.active : ""}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${footerStyles.menuList__item} ${isActive("/skillset") ? footerStyles.active : ""}`}>
            <Link href="/skillset">SkillSet</Link>
          </li>
        </ul>
        <p className={footerStyles.copyright}>
          <small>&copy; CHIKA MOTOORI {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};
