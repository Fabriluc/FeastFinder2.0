import React from "react";

const Recipe = () => {
  return (
    <div className="recipe-info">
      <div className="properties">
        <span className="property duracion">"9 anos"</span>
        <span className="property para">
          Plato principal, secundario y postre
        </span>
        <span className="property dificultad">Ultra complicado</span>
      </div>

      <div className="titulo titulo--h3">"cum"</div>
      <div className="ingredientes">
        <ul className="padding-left-0 double-column">
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-0" />
            <label htmlFor="ingrediente-0">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-1" />
            <label htmlFor="ingrediente-1">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-2" />
            <label htmlFor="ingrediente-2">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-3" />
            <label htmlFor="ingrediente-3">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-4" />
            <label htmlFor="ingrediente-4">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-5" />
            <label htmlFor="ingrediente-5">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-6" />
            <label htmlFor="ingrediente-6">"texto de ejemplo"</label>
          </li>
          <li className="ingrediente">
            <input type="checkbox" id="ingrediente-7" />
            <label htmlFor="ingrediente-7">"texto de ejemplo"</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
