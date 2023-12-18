import { Site, Type } from "../../models/models";

import Button from "../Button/Button";
import { REGEXP } from "../../constants/constants";
import { Status } from "../../models/models";
import styles from "./Item.module.scss";

interface ItemProps {
  id: number;
  siteId: number;
  name: string;
  type: Type;
  status: Status;
  siteData: Site[];
}

const Item = ({ id, siteId, name, type, status, siteData }: ItemProps) => {
  const toLowerCase = (word: string) => {
    return word.charAt(0) + word.substring(1).toLocaleLowerCase();
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
        <Button siteId={siteId} status={status} id={id} />
      </div>
    </div>
  );
};

export default Item;
