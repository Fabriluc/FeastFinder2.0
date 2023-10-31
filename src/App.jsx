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
      <div className=" bg-primary h-[calc(100vh-5rem)]">
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="/recipe/:title" element={<CurrentRecipe />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
