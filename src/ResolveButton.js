import { useContext } from "react"
import { ContextCalculator } from "./Calculator";
import resolveCalculation from "./resolveCalculation";

export default function ResolveButton() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleClick() {
        resolveCalculation(inputValue, setInputValue)
    }

    return (
        <button
            onClick={handleClick}>
            =
        </button>
    )

}

