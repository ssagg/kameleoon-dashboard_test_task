import ButtonBack from "../../components/ButtonBack/ButtonBack";
import React from "react";
import { Test } from "../../models/models";
import styles from "./Results.module.scss";
import { useParams } from "react-router-dom";

interface ResultsProps {
  data: Test[];
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  const { testId } = useParams() as any;
  const test = data.filter((item) => {
    if (testId == item.id) return item.name;
  });

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Results</h1>
        <h2 className={styles.subTitle}>{test[0].name}</h2>
      </div>
      <ButtonBack />
    </div>
  );
};

export default Results;
