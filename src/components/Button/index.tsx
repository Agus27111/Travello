import type { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Props = {
  children: ReactNode | string;
  className?: string;
  fullWidth?: boolean;
  outLine?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: "primary" | "google" | "facebook";
};

const Button = ({
  children,
  className = "",
  fullWidth,
  outLine,
  type,
  variant = "primary",
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        className,
        fullWidth && styles.fullWidth,
        outLine && styles.outLine,
        variant === "primary" && "bg-blue-100",
        variant === "google" && "bg-red-100",
        variant === "facebook" && "bg-facebook"
      )}
    >
      {variant === "facebook" && (
        <FaFacebookF className="h-6 w-6 text-white mr-2" />
      )}
      {variant === "google" && <FaGoogle className="h-6 w-6 text-white mr-2" />}
      {children}
    </button>
  );
};

export default Button;
