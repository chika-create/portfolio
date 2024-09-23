import { ButtonInterface } from "types/types";
import buttonStyles from "@styles/parts/button.module.scss";

export const Button = ({ children }: ButtonInterface) => {
  return <button className={buttonStyles.Button}>{children}</button>;
};
