import React, { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./Layout.module.scss";

const Layout: React.FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = (
  props
) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
