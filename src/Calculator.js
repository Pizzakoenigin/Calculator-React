import Buttons from "./Buttons"
import Input from "./Input"
import { useState, createContext } from "react"

export const ContextCalculator = createContext()

export default function Calculator() {
    const [inputValue, setInputValue] = useState(0);

    return (
        <ContextCalculator.Provider value={{inputValue, setInputValue}}>
            <div className="calculator">
                <Input></Input>
                <Buttons></Buttons>
            </div>
        </ContextCalculator.Provider>
    )
} 

// basic math calculation
// floating point numbers
// work with negative numbers