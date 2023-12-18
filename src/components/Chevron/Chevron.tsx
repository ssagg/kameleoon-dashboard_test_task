import chevron from "../../assets/Chevron.svg";
import styles from "./Chevron.module.scss";
import { useState } from "react";

interface IChevron {
  sortNameAsc: (title: string) => void;
  sortNameDesc: (title: string) => void;
  title: string;
}
const Chevron = ({ sortNameAsc, sortNameDesc, title }: IChevron) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <button
      type='button'
      className={toggle ? styles.sortButton : styles.sortButton2}
      onClick={() => {
        handleToggle();
        toggle ? sortNameAsc(title) : sortNameDesc(title);
      }}
    >
      <img src={chevron} className={styles.chevron} alt='Arrow' />
    </button>
  );
};

export default Chevron;
