import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-transparent py-7 fixed top-0 left-0 z-50">
      <button className="ml-4" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-neutral-700/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`${
          open ? "w-80" : "w-0"
        } bg-neutral-500/50 min-h-screen fixed top-0 left-0 transition-all duration-300 `}
      >
        <div className={`${!open && "hidden"} pt-3`}>
          <button
            className="ml-4 text-white mt-1 mb-16"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center text-white text-xl hover:bg-headerred cursor-pointer py-3 mb-2">
            Mi perfil
          </div>
          <div className="text-center text-white text-xl hover:bg-headerred cursor-pointer py-3 mb-2">
            Colecciones
          </div>
          <div className="text-center text-white text-xl hover:bg-headerred cursor-pointer py-3 mb-2">
            Favoritos
          </div>
          <div className="text-center text-white text-xl hover:bg-headerred cursor-pointer py-3 mb-2">
            <Link to="/calculator">Conversor de unidades </Link>
          </div>
          <div className="text-center text-white text-xl hover:bg-headerred cursor-pointer py-3 mb-2">
            <Link to="/contact">Contactanos </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
