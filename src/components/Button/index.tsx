import cn from "classname";
import styles from "./Button.module.css";

type Props = {
  children: string;
  className?: string;
  fullWidth?: boolean;
  outLine?: boolean;
};

const Button = ({ children, className = "", fullWidth, outLine }: Props) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.fullWidth]: fullWidth,
        [styles.outLine]: outLine,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
