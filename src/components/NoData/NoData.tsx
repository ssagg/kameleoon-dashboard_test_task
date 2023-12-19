import Button from "../Button/Button";
import styles from "./NoData.module.scss";

interface NoDataProps {
  onClick: () => void;
}

const NoData = ({ onClick }: NoDataProps) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>Your search did not match any results.</p>
      <Button onClick={handleClick}>Reset</Button>
    </div>
  );
};

export default NoData;
