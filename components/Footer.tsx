import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.menuList}>
        <li>TOP</li>
        <li>Portfolio</li>
        <li>AboutMe</li>
        <li>MySkillSet</li>
      </ul>
      <small>&copy; CHIKA MOTOORI 2024</small>
    </footer>
  );
}

export default Footer;
