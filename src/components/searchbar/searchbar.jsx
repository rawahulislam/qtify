import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import "../searchbar/searchbar.css";
const SearchBarJsx = () => {
  return (
    <div className="parent">
      <input className="box" type="search" />

      <button className="search">
        <SearchIcon />
      </button>
    </div>
  );
};
export default SearchBarJsx;
