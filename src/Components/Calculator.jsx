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
    kg: { g: 1000, lb: 2.20462, oz: 35.274, tsp: 0.5, tbsp: 0.5 },
    g: { kg: 0.001, lb: 0.00220462, oz: 0.035274, tsp: 0.0005, tbsp: 0.0005 },
    lb: { kg: 0.453592, g: 453.592, oz: 16, tsp: 0.125, tbsp: 0.125 },
    oz: { kg: 0.0283495, g: 28.3495, lb: 0.0625, tsp: 0.005, tbsp: 0.005 },

    ml: { l: 0.001, fl_oz: 0.0351951, gal: 0.264172, cup: 0.000236588 },
    l: { ml: 1000, fl_oz: 35.1951, gal: 0.219969, cup: 3.51951 },
    fl_oz: { ml: 28.4131, l: 0.0284131, gal: 0.00625, cup: 0.1 },
    cup: { ml: 236.588, l: 4.92894, fl_oz: 10, gal: 0.0625 },
    gal: { ml: 4546.09, l: 4.54609, fl_oz: 160, cup: 16 },
  };

  const handleConversion = () => {
    if (inputUnit === outputUnit) {
      setOutputValue(inputValue);
    } else if (conversionRates[inputUnit][outputUnit]) {
      const conversionRate = conversionRates[inputUnit][outputUnit];
      const convertedValue = (inputValue * conversionRate).toFixed(3);
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
        <option value="fl_oz">onzas fluidas</option>
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
        <option value="fl_oz">onzas fluidas</option>
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
