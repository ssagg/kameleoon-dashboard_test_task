import chevron from "../../assets/Chevron.svg";
import styles from "./Chevron.module.scss";
import { useState } from "react";

interface ChevronProps {
  sortAsc: (title: string) => void;
  sortDesc: (title: string) => void;
  title: string;
}
const Chevron = ({ sortAsc, sortDesc, title }: ChevronProps) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <button
      type='button'
      className={toggle ? styles.sortButtonUp : styles.sortButtonDown}
      onClick={() => {
        handleToggle();
        toggle ? sortAsc(title) : sortDesc(title);
      }}
    >
      <img src={chevron} className={styles.chevron} alt='Arrow' />
    </button>
  );
};

export default Chevron;
