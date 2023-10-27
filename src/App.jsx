import { useState } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Recipe from "./Recipe";
import CurrentRecipe from "./Components/CurrentRecipe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/recipe/:id" element={<CurrentRecipe />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
