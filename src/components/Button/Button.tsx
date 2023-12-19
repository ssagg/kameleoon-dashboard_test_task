import { Status } from "../../models/models";
import styles from "./Button.module.scss";

interface IButton {
  status?: Status;
  onClick: () => void;
  children: React.ReactNode;
  className?: string | null;
}
const Button = ({ status, onClick, children, className }: IButton) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      type='button'
      onClick={handleClick}
      className={
        className
          ? styles.button + " " + styles.gray
          : styles.button + " " + styles.green
      }
    >
      {children}
    </button>
  );
};

export default Button;
