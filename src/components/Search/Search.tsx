import styles from "./Search.module.scss";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <input
      type='search'
      className={styles.input}
      placeholder='What test are you looking for?'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
