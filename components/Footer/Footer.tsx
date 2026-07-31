"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import footerStyles from "@styles/footer.module.scss";
import { siteNavigation } from "@constants/siteNavigation";
import { getNavItemClassName, isActivePath } from "@constants/navigationUi";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerInner}>
        <ul className={footerStyles.menuList}>
          {siteNavigation.map((item) => (
            <li
              key={item.href}
              className={getNavItemClassName(
                footerStyles.menuList__item,
                footerStyles.active,
                isActivePath(pathname, item.href),
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <p className={footerStyles.copyright}>
          <small>&copy; CHIKA MOTOORI {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};
