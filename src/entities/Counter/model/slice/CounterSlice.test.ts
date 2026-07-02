import { counterActions, counterReducer } from "./CounterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("CounterSlice.test", () => {
    test("dicrement", () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.dicrement)
        ).toEqual({ value: 9 });
    });
    test("increment", () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment)
        ).toEqual({ value: 11 });
    });
    test("without state", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});
