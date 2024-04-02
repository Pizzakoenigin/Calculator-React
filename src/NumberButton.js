import { useContext } from "react";
import { ContextCalculator } from "./Calculator";

export default function NumberButton({ children }) {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleClick() {
        setInputValue(inputValue + children)
    }

    return (
        <button
            onClick={handleClick}
            data-number={children}
        >{children}</button>
    )
}