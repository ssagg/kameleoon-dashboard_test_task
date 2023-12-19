import React, { useEffect, useState } from "react";

import Item from "../../components/Item/Item";
import Loading from "../../components/Loading/Loading";
import NoData from "../../components/NoData/NoData";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Site } from "../../models/models";
import TableHeader from "../../components/TableHeader/TableHeader";
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
  const [filteredData, setFilteredData] = useState<Test[]>(data);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const status = { ONLINE: 1, PAUSED: 2, STOPPED: 3, DRAFT: 4 };

  useEffect(() => {
    if (!data.length) {
      setIsLoading(true);
      Promise.all([tests(), sites()] as any)
        .then(([respTests, respSites]) => {
          setData(respTests);
          setSitesData(respSites);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    handleSearch("");
  }, [data]);

  const handleResetButton = () => {
    setSearch("");
  };

  const handleSearch = (search: string) => {
    let res = [...data];
    if (search) {
      res = res.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredData(res);
    } else {
      setFilteredData(data);
    }
  };

  const sortAsc = (title: string) => {
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

  const sortDesc = (title: string) => {
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
      <SearchBar
        data={filteredData}
        onSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          {!filteredData.length ? (
            <NoData onClick={handleResetButton} />
          ) : (
            <>
              <TableHeader sortDesc={sortDesc} sortAsc={sortAsc} />
              <div>
                {filteredData.map((item: Test) => (
                  <Item {...item} key={item.id} siteData={sitesData} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
