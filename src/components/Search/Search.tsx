import styles from "./Search.module.scss";

interface ISearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<ISearch> = ({ search, setSearch }) => {
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
