import React from "react";

const SearchBar = () => {
  return (
    <div
      className="search-container"
      style={{
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="buscar flex items-center justify-center">
        <input
          type="text"
          className="search-input w-80 h-10 min-w-120 px-5 text-base text-black border border-silver rounded-full outline-none shadow-md"
          placeholder="Buscar..."
        />
        <button className="search-button flex items-center ml-2 px-4 py-2 text-black bg-lightcoral border-none rounded-full outline-none cursor-pointer shadow-md hover:bg-orange-300 active:bg-orange-300">
          🔎
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
