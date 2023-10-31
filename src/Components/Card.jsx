import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-1/4 p-6">
      <div className="relative transition-transform duration-300 transform-gpu hover:scale-110">
        <Link to={`/recipe/${props.title}`} key={props.title}>
          <img src={props.img} alt="" className=" object-cover" />
        </Link>
        <h3 className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
          <Link to={`/recipe/${props.title}`} key={props.title}>
            {props.title}
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default Card;
