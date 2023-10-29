import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Calculator from "./Calculator";
function CurrentRecipe() {
  let { id } = useParams();
  return (
    <>
      <div className="bg-primary flex justify-center items-center h-screen text-white">
        <div>{"This is the recipe " + id}</div>
        <Calculator />
      </div>
    </>
  );
}

export default CurrentRecipe;
