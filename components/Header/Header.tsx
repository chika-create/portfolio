import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import headerStyles from "@styles/common/header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return router.pathname === path;
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
            <li className={`${headerStyles.navItem} ${isActive("/") ? headerStyles.active : ""}`}>
              <Link href="/">TOP</Link>
            </li>
            <li className={`${headerStyles.navItem} ${isActive("/portfolio") ? headerStyles.active : ""}`}>
              <Link href="/portfolio">Projects</Link>
            </li>
            <li className={`${headerStyles.navItem} ${isActive("/about") ? headerStyles.active : ""}`}>
              <Link href="/about">About</Link>
            </li>
            <li className={`${headerStyles.navItem} ${isActive("/skillset") ? headerStyles.active : ""}`}>
              <Link href="/skillset">SkillSet</Link>
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
            <li className={`${headerStyles.spNavItem} ${isActive("/") ? headerStyles.active : ""}`}>
              <Link href="/" onClick={closeMenu}>
                TOP
              </Link>
            </li>
            <li className={`${headerStyles.spNavItem} ${isActive("/portfolio") ? headerStyles.active : ""}`}>
              <Link href="/portfolio" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className={`${headerStyles.spNavItem} ${isActive("/about") ? headerStyles.active : ""}`}>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={`${headerStyles.spNavItem} ${isActive("/skillset") ? headerStyles.active : ""}`}>
              <Link href="/skillset" onClick={closeMenu}>
                SkillSet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
