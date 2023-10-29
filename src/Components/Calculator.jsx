import React, { useState } from "react";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("kg");
  const [outputUnit, setOutputUnit] = useState("g");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const conversionRates = {
    kg: { g: 0.001, lb: 0.453592, oz: 0.0283495 },
    g: { kg: 1000, lb: 0.00220462, oz: 0.035274 },
    lb: { kg: 2.20462, g: 453.592, oz: 16 },
    oz: { kg: 35.274, g: 28.3495, lb: 0.0625 },
  };

  const handleConversion = () => {
    const conversionRate = conversionRates[inputUnit][outputUnit] || 1;
    const convertedValue = inputValue * conversionRate;
    setOutputValue(convertedValue);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h1>Convertir Unidades</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        className="w-50 bg-neutral-600 mb-5 mt-2"
      />
      <select
        value={inputUnit}
        onChange={handleInputUnitChange}
        className="w-40 bg-neutral-600 mb-5"
      >
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="lb">lb</option>
        <option value="oz">oz</option>
      </select>
      <select
        value={outputUnit}
        onChange={handleOutputUnitChange}
        className="w-40 bg-neutral-600 mb-5"
      >
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="lb">lb</option>
        <option value="oz">oz</option>
      </select>
      <button
        onClick={handleConversion}
        className="w-20 bg-headerred mb-3 rounded py-2 text-white"
      >
        Convertir
      </button>
      <p>
        {outputValue} {outputUnit}
      </p>
    </div>
  );
};

export default UnitConverter;
