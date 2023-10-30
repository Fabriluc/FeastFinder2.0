import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="search-container flex justify-center mr-10">
      <div className="buscar flex items-center justify-center">
        <input
          type="text"
          className="search-input w-80 h-10 min-w-120 px-5 text-base text-white bg-secondary border border-gray-400 rounded-full outline-none shadow-md"
          placeholder="Buscar..."
        />
        <button className="search-button flex items-center ml-2 px-4 py-2 text-white bg-secondary border border-gray-400 rounded-full outline-none cursor-pointer shadow-md hover:bg-orange-300 active:bg-orange-300">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
