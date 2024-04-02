import { useContext } from "react"
import { ContextCalculator } from "./Calculator";


export default function ClearButton({children}) {
    const { inputValue, setInputValue } = useContext(ContextCalculator)
    
    function handleClick() {
        setInputValue('')
    }

    return(
        <button
            onClick={handleClick}
        >{children}</button>
    )
}