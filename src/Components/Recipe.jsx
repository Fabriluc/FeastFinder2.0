import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Recipe() {
  return (
    <>
      <div className="bg-primary flex justify-evenly items-center h-screen">
        <h1 className="text-white">
          <Link to="/recipe/tarta-de-chicho">Tarta de chicho</Link>
        </h1>
        <h1 className="text-white">
          <Link to="/recipe/asado-de-faso">Asado de faso</Link>
        </h1>
        <h1 className="text-white">
          <Link to="/recipe/polenta-invertida">Polenta invertida</Link>
        </h1>
        <h1 className="text-white">
          <Link to="/recipe/tarta-de-queso">Tarta de queso</Link>
        </h1>
        <h1 className="text-white">
          <Link to="/recipe/pastel-de-crema">Pastel de crema</Link>
        </h1>
      </div>
    </>
  );
}

export default Recipe;
