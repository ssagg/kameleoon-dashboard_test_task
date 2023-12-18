import React, { useEffect, useState } from "react";

import Chevron from "../../components/Chevron/Chevron";
import Item from "../../components/Item/Item";
import NoData from "../../components/NoData/NoData";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Site } from "../../models/models";
import { Test } from "../../models/models";
import { sites } from "../../services/api";
import styles from "./Dashboard.module.scss";
import { tests } from "../../services/api";

interface DashboardProps {
  data: Test[];
  setData: React.Dispatch<React.SetStateAction<Test[]>>;
  sitesData: Site[];
  setSitesData: React.Dispatch<React.SetStateAction<Site[]>>;
}

const Dashboard = ({
  data,
  setData,
  sitesData,
  setSitesData,
}: DashboardProps) => {
  useEffect(() => {
    if (!data.length)
      Promise.all([tests(), sites()])
        .then(([respTests, respSites]: any) => {
          setData(respTests);
          setSitesData(respSites);
        })
        .catch((error) => console.log(error));
  }, []);
  const onClick = () => {
    console.log("reet");
  };
  const [filteredData, setFilteredData] = useState<Test[]>(data);

  const handleSearch = (search: string) => {
    let res = [...data];
    if (search) {
      res = res.filter((item) =>
        item.name.toLocaleLowerCase().includes(search)
      );
      setFilteredData(res);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    handleSearch("");
  }, [data]);

  const status = { ONLINE: 1, PAUSED: 2, STOPPED: 3, DRAFT: 4 };

  const sortNameAsc = (title: string) => {
    if (title === "Name") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.name < a.name ? 1 : b.name > a.name ? -1 : 0
      );
      setData([...sorted]);
    } else if (title === "Type") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.type < a.type ? 1 : b.type > a.type ? -1 : 0
      );
      setData([...sorted]);
    } else if (title === "Status") {
      const sorted = data.sort((a, b) => status[a.status] - status[b.status]);
      setData([...sorted]);
    } else if (title === "Site") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.siteId < a.siteId ? 1 : b.siteId > a.siteId ? -1 : 0
      );
      setData([...sorted]);
    }
  };
  const sortNameDesc = (title: string) => {
    if (title === "Name") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.name > a.name ? 1 : b.name < a.name ? -1 : 0
      );
      setData([...sorted]);
    } else if (title === "Type") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.type > a.type ? 1 : b.type < a.type ? -1 : 0
      );
      setData([...sorted]);
    } else if (title === "Status") {
      const sorted = data.sort((a, b) => status[b.status] - status[a.status]);
      setData([...sorted]);
    } else if (title === "Site") {
      const sorted: Test[] = data.sort((a: Test, b: Test) =>
        b.siteId > a.siteId ? 1 : b.siteId < a.siteId ? -1 : 0
      );
      setData([...sorted]);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <SearchBar data={filteredData} onSearch={handleSearch} />
      <div className={styles.wrapper}>
        {!filteredData.length ? (
          <NoData onClick={onClick} />
        ) : (
          <>
            <div className={styles.tableHeader}>
              <p className={styles.tableTitle}>
                NAME
                <Chevron
                  sortNameAsc={sortNameAsc}
                  sortNameDesc={sortNameDesc}
                  title={"Name"}
                />
              </p>

              <p className={styles.tableTitle}>
                TYPE
                <Chevron
                  sortNameAsc={sortNameAsc}
                  sortNameDesc={sortNameDesc}
                  title={"Type"}
                />
              </p>
              <p className={styles.tableTitle}>
                STATUS
                <Chevron
                  sortNameAsc={sortNameAsc}
                  sortNameDesc={sortNameDesc}
                  title={"Status"}
                />
              </p>
              <p className={styles.tableTitle}>
                SITE
                <Chevron
                  sortNameAsc={sortNameAsc}
                  sortNameDesc={sortNameDesc}
                  title={"Site"}
                />
              </p>
            </div>
            <div>
              {filteredData.map((item: Test) => (
                <Item {...item} key={item.id} siteData={sitesData} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
