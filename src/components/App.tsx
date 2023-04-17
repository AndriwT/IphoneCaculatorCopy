import React, { useState } from "react";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "÷":
        result = prev / curr;
        break;
      case "x":
        result = prev * curr;
        break;
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
    }
    return result;
  };

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const selectOperation = (operation: string) => {
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  return (
    <div className="flex flex-col justify-center items-center bg-stone-900 m-8 p-2 pt-8 pb-2 rounded-3xl border-4 border-black">
      <div className="bg-stone-900 w-60 text-6xl text-white rounded-md flex justify-end items-center pr-2 mt-4 h-14 overflow-auto">
        {currentValue}
      </div>
      <div className="mt-6">
        <div className="flex ">
          <OperationButton
            operation={"AC"}
            selectOperation={clear}
            className={`mr-2 text-black`}
          />
          <OperationButton
            operation={"C"}
            selectOperation={del}
            className={`mr-2 text-black`}
          />
          <OperationButton
            operation={"%"}
            selectOperation={percent}
            className={` text-black`}
          />
          <OperationButton
            operation={"÷"}
            selectOperation={selectOperation}
            className={`hover:bg-yellow-500 bg-yellow-600`}
          />
        </div>
        <div className="flex ">
          <DigitButton digit={"7"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"8"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"9"} enterDigit={setDigit} />
          <OperationButton
            operation={"x"}
            selectOperation={selectOperation}
            className={`hover:bg-yellow-500 bg-yellow-600`}
          />
        </div>
        <div className="flex ">
          <DigitButton digit={"4"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"5"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"6"} enterDigit={setDigit} />
          <OperationButton
            operation={"-"}
            selectOperation={selectOperation}
            className={`hover:bg-yellow-500 bg-yellow-600`}
          />
        </div>
        <div className="flex ">
          <DigitButton digit={"1"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"2"} enterDigit={setDigit} className={`mr-2`} />
          <DigitButton digit={"3"} enterDigit={setDigit} />
          <OperationButton
            operation={"+"}
            selectOperation={selectOperation}
            className={`hover:bg-yellow-500 bg-yellow-600`}
          />
        </div>
        <div className="flex ">
          <DigitButton digit={"0"} enterDigit={setDigit} className={`w-32`} />
          <DigitButton digit={"."} enterDigit={setDigit} />
          <button
            className="transition ease-in-out delay-90 hover:bg-yellow-500 rounded-full bg-yellow-600 m-1 w-14 h-14 text-white text-2xl"
            onClick={equals}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
