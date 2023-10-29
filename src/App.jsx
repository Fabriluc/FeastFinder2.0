import { useState } from "react";
import Header from "./Components/Header.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Recipe from "./Components/Recipe";
import CurrentRecipe from "./Components/CurrentRecipe";
import ContactForm from "./Components/ContactForm.jsx";
import Calculator from "./Components/Calculator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/recipe/:id" element={<CurrentRecipe />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
