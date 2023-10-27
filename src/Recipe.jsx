import { Link } from "react-router-dom";
function Recipe() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>
          <Link to="/recipe/tarta-de-chicho">Tarta de chicho</Link>
        </h1>
        <h1>
          <Link to="/recipe/asado-de-faso">Asado de faso</Link>
        </h1>
        <h1>
          <Link to="/recipe/polenta-invertida">Polenta invertida</Link>
        </h1>
        <h1>
          <Link to="/recipe/tarta-de-queso">Tarta de queso</Link>
        </h1>
        <h1>
          <Link to="/recipe/pastel-de-crema">Pastel de crema</Link>
        </h1>
      </div>
    </>
  );
}

export default Recipe;
