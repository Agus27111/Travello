import clsx from "clsx";
import styles from "./Input.module.css";
import type { InputProps } from "./interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  name,
  label,
  type,
  placeholder,
  className,
  register,
  errors,
  required,
  pattern,
}: InputProps) => {
  const [hidePassword, setHidePassword] = useState(false);
  const [inputType, setInputType] = useState(type);
  const isInputErrors = errors && errors[name];
  const inputErrorHint = `${name}-input-error-hint`;
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
        {...(register,
        (name,
        {
          required,
          pattern,
        }))}
        formNoValidate
        type={inputType}
        id={name}
        placeholder={placeholder}
        className={styles.input}
        aria-describedby={inputErrorHint}
      />
      {type === "password" ? (
        <button
          type="button"
          onClick={handleEyeClick}
          className={clsx(styles.eye, isInputErrors && styles.eyeError)}
        >
          {hidePassword ? (
            <FaEyeSlash className="h-6 w-6 text-gray-100" />
          ) : (
            <FaEye className="h-6 w-6 text-gray-100" />
          )}
        </button>
      ) : null}{" "}
      {isInputErrors ? (
        <span className="text-xs text-red-100 mt-1 ml-3">
          {errors[name].message}
        </span>
      ) : null}
    </label>
  );
};

export default Input;
