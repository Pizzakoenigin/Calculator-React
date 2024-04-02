import Operator from "./Operator";
import ClearButton from "./ClearButton";

export default function Operators() {
    return (
        <div className="operators">
            <Operator>➕</Operator>
            <Operator>➖</Operator>
            <Operator>✖️</Operator>
            <Operator>➗</Operator>
            <Operator>🟰</Operator>
            <ClearButton>C</ClearButton>
        </div>

    )
}