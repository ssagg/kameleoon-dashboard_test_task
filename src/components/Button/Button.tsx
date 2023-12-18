import { Status } from "../../models/models";
import styles from "./Button.module.scss";
import { useNavigate } from "react-router-dom";

interface IButton {
  siteId?: number;
  status?: Status;
  id?: number;
  onClick?: () => void;
}
const Button = ({ status, siteId, id, onClick }: IButton) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        status === "DRAFT"
          ? navigate(`/finalize/${id}`)
          : navigate(`/results/${id}`)
      }
      className={
        status === "DRAFT" ? styles.buttonFinalize : styles.buttonResults
      }
    >
      {status === "DRAFT" ? "Finalize" : "Results"}
    </button>
  );
};

export default Button;
