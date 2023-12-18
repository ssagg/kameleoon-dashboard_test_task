import chevron from "../../assets/Chevron_left.svg";
import styles from "./ButtonBack.module.scss";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate(-1)}>
      <img className={styles.chevron} src={chevron} alt='Chevron' /> Back
    </button>
  );
};

export default ButtonBack;
