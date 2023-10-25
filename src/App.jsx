import { useState } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
