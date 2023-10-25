import React from "react";
import headerLogo from "../img/headerlogo.png";

const Header = () => {
  return (
    <header className="flex absolute justify-between top-0 left-0 w-full bg-red-500 text-black no-underline p-0">
      <h1 className="text-3xl font-bold">
        <a href="index.html" className="inline-block">
          <img src={headerLogo} alt="FeastFinder" className="w-32 h-auto" />
        </a>
      </h1>
    </header>
  );
};

export default Header;
