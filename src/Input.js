import { useContext, useState } from "react";
import { ContextCalculator } from "./Calculator";
import resolveCalculation from "./resolveCalculation";

export default function Input() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleInput(event) {
        const checkValue = event.target.value.replace(/[^0-9+\-/*=.]/g, '');
        setInputValue(checkValue)
    }

    if (inputValue == 'NaN' || inputValue == 'Infinity') {
        setInputValue('invalid Input')
    }

    function handleKeyPressed(event) {
        if (event.key === 'Enter') {
            resolveCalculation(inputValue, setInputValue)

        }
    }

    return (
        <>
            <input
                name="output"
                type="text"
                className="result"
                onChange={handleInput}
                onKeyDown={handleKeyPressed}
                value={inputValue}
            />
        </>
    )
}