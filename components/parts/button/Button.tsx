import { ButtonProps } from "../../../types/types";
import styles from "@styles/parts/button.module.scss";

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.Button}>{children}</button>;
};
