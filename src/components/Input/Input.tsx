import styles from "./Input.module.scss";
import type { InputProps } from "./Input.types";

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input 
      className={[styles.input, className].join(" ")} 
      {...props}
    />
  );
};

export default Input;