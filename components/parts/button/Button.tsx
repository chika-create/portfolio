import { ButtonProps } from "../../../types/types";
import buttonStyles from "@styles/parts/button.module.scss";

export const Button = ({ children }: ButtonProps) => {
  return <button className={buttonStyles.Button}>{children}</button>;
};
