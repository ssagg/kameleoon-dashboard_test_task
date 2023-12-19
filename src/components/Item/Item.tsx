import { Site, Type } from "../../models/models";

import Button from "../Button/Button";
import { Status } from "../../models/models";
import styles from "./Item.module.scss";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  id: number;
  siteId: number;
  name: string;
  type: Type;
  status: Status;
  siteData: Site[];
}

const Item = ({ id, siteId, name, type, status, siteData }: ItemProps) => {
  const navigate = useNavigate();
  const toLowerCase = (word: string) => {
    return word.charAt(0) + word.substring(1).toLocaleLowerCase();
  };

  const handleClick = () => {
    status === "DRAFT"
      ? navigate(`/finalize/${id}`)
      : navigate(`/results/${id}`);
  };

  return (
    <div className={styles.item}>
      <div
        className={
          siteId === 1
            ? styles.colorTag
            : siteId === 2
            ? styles.colorTag + " " + styles.colorTagRed
            : styles.colorTag + " " + styles.colorTagPurpleLt
        }
      ></div>
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.type}>{toLowerCase(type)}</p>
        <p
          className={
            status === "ONLINE"
              ? styles.statusOnline
              : status === "DRAFT"
              ? styles.statusDraft
              : status === "STOPPED"
              ? styles.statusStopped
              : styles.statusPaused
          }
        >
          {toLowerCase(status)}
        </p>
        <p className={styles.siteId}>
          {siteData.map((site) => {
            if (site.id === siteId)
              return site.url.replace(
                /(https:\/\/)|(http:\/\/)|(https:\/\/)*(www.)/gi,
                ""
              );
          })}
        </p>
        <Button
          onClick={handleClick}
          className={status === "DRAFT" ? "DRAFT" : null}
        >
          {status === "DRAFT" ? "Finalize" : "Results"}
        </Button>
      </div>
    </div>
  );
};

export default Item;
