import { useContext } from "react";
import { ContextCalculator } from "./Calculator";

export default function NumberButton({ children }) {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleClick() {
        console.log('click');


        setInputValue(inputValue + children)
        console.log(inputValue);
    }

    return (
        <button
            onClick={handleClick}
            data-number={children}
        >{children}</button>
    )
}