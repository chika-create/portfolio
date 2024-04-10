import { LinkButtonProps } from "../../../types/types";
import styles from "@styles/parts/linkButton.module.scss";

function LinkButton({ children }: LinkButtonProps) {
  return <button className={styles.linkButton}>{children}</button>;
}

export default LinkButton;
