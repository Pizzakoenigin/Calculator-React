import Buttons from "./Buttons"
import Output from "./Output"
import { useState, useContext, createContext } from "react"

export const ContextCalculator = createContext()

export default function Calculator() {
    const [inputValue, setInputValue] = useState(0);

    return (
        <ContextCalculator.Provider value={{inputValue, setInputValue}}>
            <div className="calculator">
                <Output></Output>
                <Buttons></Buttons>
            </div>
        </ContextCalculator.Provider>
    )
} 