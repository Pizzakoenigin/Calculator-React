import Operator from "./Operator";
import ClearButton from "./ClearButton";
import ResolveButton from "./ResolveButton";

export default function Operators() {
    return (
        <div className="operators">
            <Operator>+</Operator>
            <Operator>-</Operator>
            <Operator>*</Operator>
            <Operator>/</Operator>
            <ResolveButton/>
            <ClearButton/>
        </div>

    )
}