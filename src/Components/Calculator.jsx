import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [grams, setGrams] = useState(0);
  const [ounces, setOunces] = useState(0);
  const [cubicCentimeters, setCubicCentimeters] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertToGrams = () => {
    const ouncesValue = parseFloat(inputValue);
    if (!isNaN(ouncesValue)) {
      const gramsValue = ouncesValue * 28.35;
      setGrams(gramsValue.toFixed(2));
    } else {
      setGrams(0);
    }
  };

  const convertToOunces = () => {
    const gramsValue = parseFloat(inputValue);
    if (!isNaN(gramsValue)) {
      const ouncesValue = gramsValue / 28.35;
      setOunces(ouncesValue.toFixed(2));
    } else {
      setOunces(0);
    }
  };

  const convertToCubicCentimeters = () => {
    const millilitersValue = parseFloat(inputValue);
    if (!isNaN(millilitersValue)) {
      setCubicCentimeters(millilitersValue.toFixed(2));
    } else {
      setCubicCentimeters(0);
    }
  };

  return (
    <div>
      <h1>Kitchen Converter</h1>
      <label>
        Ounces:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={convertToGrams}>Convert to Grams</button>
      <p>Grams: {grams}</p>
      <button onClick={convertToOunces}>Convert to Ounces</button>
      <p>Ounces: {ounces}</p>
      <button onClick={convertToCubicCentimeters}>
        Convert to Cubic Centimeters
      </button>
      <p>Cubic Centimeters: {cubicCentimeters}</p>
    </div>
  );
};

export default Calculator;
