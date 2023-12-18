import { Test } from "../../models/models";
import styles from "./Counter.module.scss";

interface CounterProps {
  data: Test[];
}

export const Counter: React.FC<CounterProps> = ({ data }) => {
  return <p className={styles.counter}>{data.length} tests</p>;
};
