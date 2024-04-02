import { useContext } from "react";
import { ContextCalculator } from "./Calculator";

export default function Output() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)
    return (
        <>
            <input
                name="output"
                type="number"
                className="result"
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}
                value={inputValue}
                />
        </>

    )
}