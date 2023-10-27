import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CurrentRecipe() {
  let { id } = useParams();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>{"This is the recipe " + id}</div>
      </div>
    </>
  );
}

export default CurrentRecipe;
