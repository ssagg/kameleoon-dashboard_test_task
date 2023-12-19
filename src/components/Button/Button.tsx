import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string | null;
}
const Button = ({ onClick, children, className }: ButtonProps) => {
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
