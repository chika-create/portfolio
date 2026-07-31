"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import headerStyles from "@styles/common/header.module.scss";
import { siteNavigation } from "@constants/siteNavigation";
import { getNavItemClassName, isActivePath } from "@constants/navigationUi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerInner}>
        <div className={headerStyles.name}>
          <Link href="/" onClick={closeMenu}>
            本告 智香
            <span className={headerStyles.enName}>CHIKA MOTOORI</span>
          </Link>
        </div>

        <nav className={headerStyles.pcNav}>
          <ul className={headerStyles.navList}>
            {siteNavigation.map((item) => (
              <li
                key={item.href}
                className={getNavItemClassName(
                  headerStyles.navItem,
                  headerStyles.active,
                  isActivePath(pathname, item.href),
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={headerStyles.hamburger}
          onClick={toggleMenu}
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav
          className={`${headerStyles.spNav} ${isOpen ? headerStyles.isOpen : ""}`}
        >
          <ul className={headerStyles.spNavList}>
            {siteNavigation.map((item) => (
              <li
                key={item.href}
                className={getNavItemClassName(
                  headerStyles.spNavItem,
                  headerStyles.active,
                  isActivePath(pathname, item.href),
                )}
              >
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
