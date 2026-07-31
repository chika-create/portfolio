import Link from "next/link";
import { ButtonInterface } from "@app-types/types";
import buttonStyles from "@styles/parts/button.module.scss";

export const Button = ({ children, href, onClick, className }: ButtonInterface) => {
  const combinedClassName = `${buttonStyles.Button} ${className || ""}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
