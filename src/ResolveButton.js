import { useContext } from "react"
import { ContextCalculator } from "./Calculator";

export default function ResolveButton() {
    const { inputValue, setInputValue } = useContext(ContextCalculator)

    function handleClick() {
        let toResolve = inputValue

        let numbersInput = toResolve.split(/[+\-*/=]/).map(parseFloat);
        let operators = toResolve.split(/[0-9]+/).filter(Boolean)

        console.log(numbersInput, operators);


        for (let i = 0; i < operators.length; i++) {
            let operator = operators[i];
            let numberInput = numbersInput[i + 1];

            if (operator === '*' || operator === '/') {
                const previousNumber = numbersInput[i];
                const result = operator === '*' ? previousNumber * numberInput : previousNumber / numberInput;

                numbersInput.splice(i, 2, result);
                operators.splice(i, 1);
                i--
            }
        }

        let result = numbersInput[0];
        for (let i = 0; i < operators.length; i++) {
            let operator = operators[i];
            let numberInput = numbersInput[i + 1];

            switch (operator) {
                case '+':
                    result += numberInput;
                    break;
                case '-':
                    result -= numberInput;
                    break;
                default:
                    break;
            }
        }

        setInputValue(result.toString())
    }



    return (
        <button
            onClick={handleClick}>
            =
        </button>
    )

}

