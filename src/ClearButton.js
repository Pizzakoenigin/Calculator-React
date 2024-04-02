import { useContext } from "react"
import { ContextCalculator } from "./Calculator";


export default function ClearButton() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)
    
    function handleClick() {
        setInputValue('')
    }

    return(
        <button
            onClick={handleClick}
        >C</button>
    )
}