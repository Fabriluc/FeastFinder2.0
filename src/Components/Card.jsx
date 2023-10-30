import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <img src={props.img} alt="" className="w-20" />
      <h1 className="text-white">
        <Link to={`/recipe/${props.title}`} key={props.title}>
          {props.title}
        </Link>
      </h1>
    </div>
  );
}
export default Card;
