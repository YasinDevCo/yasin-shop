import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helper";
import style from './SearchBox.module.css'

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        value={search}
        placeholder="Type For Search"
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
