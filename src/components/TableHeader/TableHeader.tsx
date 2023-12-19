import Chevron from "../Chevron/Chevron";
import styles from "./TableHeader.module.scss";

interface TableHeaderProps {
  sortAsc: (title: string) => void;
  sortDesc: (title: string) => void;
}

const TableHeader = ({ sortAsc, sortDesc }: TableHeaderProps) => {
  return (
    <div className={styles.tableHeader}>
      <p className={styles.tableTitle}>
        NAME
        <Chevron sortAsc={sortAsc} sortDesc={sortDesc} title={"Name"} />
      </p>

      <p className={styles.tableTitle}>
        TYPE
        <Chevron sortAsc={sortAsc} sortDesc={sortDesc} title={"Type"} />
      </p>
      <p className={styles.tableTitle}>
        STATUS
        <Chevron sortAsc={sortAsc} sortDesc={sortDesc} title={"Status"} />
      </p>
      <p className={styles.tableTitle}>
        SITE
        <Chevron sortAsc={sortAsc} sortDesc={sortDesc} title={"Site"} />
      </p>
    </div>
  );
};

export default TableHeader;
