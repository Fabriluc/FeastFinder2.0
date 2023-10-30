import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Calculator from "./Calculator";
import { useEffect } from "react";
import { useState } from "react";

function CurrentRecipe() {
  let { title } = useParams();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/recipes/${title}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      <div className="bg-primary flex justify-center items-center h-screen text-white">
        <div>
          <h1>{recipe[0]?.title}</h1>
          <img
            className="w-1/2 max-h-80"
            width="1000px"
            src={recipe[0]?.img}
            alt=""
          />
          <p className="w-1/2">{recipe[0]?.description}</p>
        </div>
        <Calculator />
      </div>
    </>
  );
}

export default CurrentRecipe;
