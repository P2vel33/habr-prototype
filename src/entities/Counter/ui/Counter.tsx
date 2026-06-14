import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const dicrement = () => {
        dispatch(counterActions.dicrement());
    };
    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={dicrement}>--</Button>
            <Button onClick={increment}>++</Button>
        </div>
    );
};
