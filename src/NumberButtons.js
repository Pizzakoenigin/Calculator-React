import NumberButton from "./NumberButton";
import { useContext } from "react";
import { ContextCalculator } from "./Calculator";

export default function NumberButtons() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)
    return (
        <div className="numbers">
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <NumberButton>0</NumberButton>
            <NumberButton>.</NumberButton>
        </div>

    )
}