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
      <section className="bg-primary flex flex-col items-center">
        <div className="bg-primary flex flex-col items-center justify-center text-white mt-6">
          <h1 className="text-4xl mb-8 ">{recipe[0]?.title}</h1>
          <img className=" mb-8 max-w-sm" src={recipe[0]?.img} alt="" />
          <p className="w-2/4 text-center mb-10">{recipe[0]?.description}</p>
        </div>
        <div className="flex justify-center items-center">
          <Calculator />
        </div>
      </section>
    </>
  );
}

export default CurrentRecipe;
