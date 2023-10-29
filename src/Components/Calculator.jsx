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
    kg: { g: 1000, lb: 2.20462, oz: 35.27 },
    g: { kg: 1000, lb: 0.00220462, oz: 0.035274 },
    lb: { kg: 2.20462, g: 453.592, oz: 16 },
    oz: { kg: 35.274, g: 28.3495, lb: 0.0625 },
  };

  const handleConversion = () => {
    if (inputUnit === outputUnit) {
      setOutputValue(inputValue);
    } else if (conversionRates[inputUnit][outputUnit]) {
      const conversionRate = conversionRates[inputUnit][outputUnit];
      const convertedValue = (inputValue * conversionRate).toFixed(2);
      setOutputValue(convertedValue);
    } else {
      setOutputValue("Invalid conversion");
    }
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
        <option value="kg">kilogramos</option>
        <option value="g">gramos</option>
        <option value="lb">libras</option>
        <option value="oz">onzas</option>
        <option value="tsp">cucharadas</option>
        <option value="tbsp">cucharadas soperas</option>

        <option value="l">litros</option>
        <option value="ml">mililitros</option>
        <option value="fl-oz">onzas fluidas</option>
        <option value="gal">galones</option>
        <option value="cup">tazas (vol)</option>
      </select>
      <select
        value={outputUnit}
        onChange={handleOutputUnitChange}
        className="w-40 bg-neutral-600 mb-5"
      >
        <option value="kg">kilogramos</option>
        <option value="g">gramos</option>
        <option value="lb">libras</option>
        <option value="oz">onzas</option>
        <option value="tsp">cucharadas</option>
        <option value="tbsp">cucharadas soperas</option>

        <option value="l">litros</option>
        <option value="ml">mililitros</option>
        <option value="fl-oz">onzas fluidas</option>
        <option value="gal">galones</option>
        <option value="cup">tazas (vol)</option>
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
