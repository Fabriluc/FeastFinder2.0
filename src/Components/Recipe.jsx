import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  });
  return (
    <>
      <div className="bg-primary flex justify-evenly items-center h-screen">
        {recipes.map((recipe) => (
          <Card key={recipe.title} title={recipe.title} img={recipe.img} />
        ))}
      </div>
    </>
  );
}

export default Recipe;
