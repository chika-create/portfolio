import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import headerStyles from "@styles/common/header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li className={headerStyles.navItem}>
              <Link href="/">TOP</Link>
            </li>
            <li className={headerStyles.navItem}>
              <Link href="/portfolio">Projects</Link>
            </li>
            <li className={headerStyles.navItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={headerStyles.navItem}>
              <Link href="/skill">SkillSet</Link>
            </li>
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
            <li className={headerStyles.spNavItem}>
              <Link href="/" onClick={closeMenu}>
                TOP
              </Link>
            </li>
            <li className={headerStyles.spNavItem}>
              <Link href="/portfolio" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className={headerStyles.spNavItem}>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={headerStyles.spNavItem}>
              <Link href="/skill" onClick={closeMenu}>
                SkillSet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
