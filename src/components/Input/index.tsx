import clsx from "clsx";
import styles from "./Input.module.css";
import type { InputProps } from "./interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({ name, label, type, placeholder, className }: InputProps) => {
  const [hidePassword, setHidePassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleEyeClick = () => {
    setHidePassword((prevState) => !prevState);

    if (type === "password" && !hidePassword) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <label htmlFor={name} className={clsx(styles.label, className)}>
      <div className="mb-3">{label}</div>
      <input
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
        className={styles.input}
      />
      {type === "password" ? (
        <button type="button" onClick={handleEyeClick} className={styles.eye}>
          {hidePassword ? (
            <FaEyeSlash className="h-6 w-6 text-gray-100" />
          ) : (
            <FaEye className="h-6 w-6 text-gray-100" />
          )}
        </button>
      ) : null}{" "}
    </label>
  );
};

export default Input;
