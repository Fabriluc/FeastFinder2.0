import React, { useState } from "react";
import headerLogo from "../img/headerlogo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
const Header = () => {
  return (
    <header className="flex absolute justify-between top-0 left-0 w-full bg-headerred text-black no-underline p-0">
      <h1 className="text-3xl font-bold">
        <Link className="inline-block" to="/">
          <img
            src={headerLogo}
            alt="FeastFinder"
            className="w-32 h-auto ml-12"
          />{" "}
        </Link>
      </h1>
      <SearchBar />
      <Sidebar />
    </header>
  );
};

export default Header;
