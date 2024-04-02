import { useContext, useState } from "react";
import { ContextCalculator } from "./Calculator";

export default function Output() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleInput(event) {
        const checkValue = event.target.value.replace(/[^0-9+\-/*=]/g, '');
        setInputValue(checkValue)
    }
    
    if (inputValue == 'NaN' || inputValue == 'Infinity') {
        setInputValue('invalid Input')
    }

    return (
        <>
            <input
                name="output"
                type="text"
                className="result"
                onChange={ handleInput}
                value={inputValue}
                />
        </>
    )
}