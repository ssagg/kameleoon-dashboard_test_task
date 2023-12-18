import ButtonBack from "../../components/ButtonBack/ButtonBack";
import React from "react";
import { Test } from "../../models/models";
import styles from "./Finalize.module.scss";
import { useParams } from "react-router-dom";

interface FinalizeProps {
  data: Test[];
}

const Finalize: React.FC<FinalizeProps> = ({ data }) => {
  const { testId } = useParams() as any;
  const test = data.filter((item) => {
    if (testId == item.id) return item.name;
  });
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Finalize</h1>
        <h2 className={styles.subTitle}>{test[0].name}</h2>
      </div>
      <ButtonBack />
    </div>
  );
};

export default Finalize;
