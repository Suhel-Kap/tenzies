import "./App.css";
import Die from "./components/Die";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
    function addNewDice() {
        const arr = [];
        for (let i = 0; i < 10; i++)
            arr.push(Math.floor(Math.random() * 6) + 1);
        return arr;
    }

    function handleClick() {
        setDieValue(addNewDice());
    }

    const [dieValue, setDieValue] = useState(addNewDice());
    console.log(dieValue);
    const dieElements = dieValue.map((die) => <Die value={die} />);

    return (
        <main className="bg-custom-dark-blue-700 h-screen grid place-items-center font-inter">
            <div className="box-border h-3/4 w-2/3 max-w-screen-md p-4 border-0 rounded-xl bg-neutral-100 m4 flex flex-col items-center">
                <h1 className="font-bold text-4xl text-center text-custom-dark-blue-600 mt-9 tracking-tight">
                    Tenzies
                </h1>
                <p className="text-custom-dark-blue-500 font-normal max-w-xs text-center mt-4">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                <div className="grid grid-cols-5 mt-16 mx-auto mb-16 gap-x-10 gap-y-9">
                    {dieElements}
                </div>
                <div>
                    <Button handleClick={handleClick} />
                </div>
            </div>
        </main>
    );
}

export default App;
