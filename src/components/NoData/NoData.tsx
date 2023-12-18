import React from "react";
import Button from "../Button/Button";

import styles from "./NoData.module.scss";
import { useNavigate } from "react-router-dom";

const NoData = ({ status, siteId, id, onClick }: any) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Your search did not match any results.</p>
      <Button
        onClick={onClick}
        // siteId={siteId}
        // status={status}
        // id={id}
      ></Button>
    </div>
  );
};

export default NoData;
