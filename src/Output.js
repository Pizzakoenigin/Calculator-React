import { useContext, useState } from "react";
import { ContextCalculator } from "./Calculator";

export default function Output() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)
    const { noValue, setNoValue} = useState ('')

    function handleInput(event) {
        const checkValue = event.target.value.replace(/[^0-9+\-/*=]/g, '');
        setInputValue(checkValue)
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