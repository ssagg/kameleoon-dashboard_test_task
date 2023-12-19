import { useEffect, useState } from "react";

import { Counter } from "../Counter/Counter";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Test } from "../../models/models";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  data: Test[];
  onSearch: (search: string) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ data, onSearch, search, setSearch }: SearchBarProps) => {
  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Logo />
        <Search search={search} setSearch={setSearch} />
      </div>
      <Counter data={data} />
    </div>
  );
};

export default SearchBar;
