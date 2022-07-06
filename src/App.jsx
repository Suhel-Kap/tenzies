import "./App.css";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Confetti from "react-confetti";

function App() {
    const [dieValue, setDieValue] = useState(addNewDice());
    const [tenzies, setTenzies] = useState(false);
    useEffect(() => {
        let result = false;
        result = dieValue.every((ele) => {
            if (ele.isHeld === true && ele.value === dieValue[0].value)
                return true;
        });
        if (result === true) {
            setTenzies(true);
        }
    }, [dieValue]);

    function holdDice(id) {
        setDieValue((prevDie) => {
            return prevDie.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            );
        });
    }

    function getNewDie() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid(),
        };
    }

    function addNewDice() {
        const arr = [];
        for (let i = 0; i < 10; i++) arr.push(getNewDie());
        return arr;
    }

    function handleClick() {
        if (tenzies === false) {
            setDieValue((prevDie) =>
                prevDie.map((die) => {
                    return die.isHeld ? die : getNewDie();
                })
            );
        } else {
            setDieValue(addNewDice());
            setTenzies(false);
        }
    }

    const dieElements = dieValue.map((die) => (
        <Die
            // key={dieValue.indexOf(die)} you could use index of the object
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            handleClick={() => holdDice(die.id)}
        />
    ));

    return (
        <main className="bg-custom-dark-blue-700 h-screen grid place-items-center font-inter">
            {tenzies && <Confetti />}
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
                    <Button handleClick={handleClick} tenzies={tenzies} />
                </div>
            </div>
        </main>
    );
}

export default App;
