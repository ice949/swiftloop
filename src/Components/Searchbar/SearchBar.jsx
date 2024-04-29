import React from "react";
import "./SearchBar.css"; // Import your CSS file

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab831e373a25b4e51d5732bcd93c436ee6fb621171290471d8475835668ebd7?"
        alt="Search Icon"
        className="search-icon"
      />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBar;
