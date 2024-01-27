import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-box">
      <input placeholder="Search a album of your choice" className="text-box" />
      <div className="search-icon-box">
        <img src="./Searchicon.svg" alt="search" />
      </div>
    </div>
  );
};

export default SearchBox;
