import { StateSchema } from "@/app/providers/StoreProvider";
import { selectLoginState } from "./selectLoginState";

describe("selectLoginState.test", () => {
    test("should return object with username = 'user'", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "user",
            },
        };
        expect(selectLoginState(state as StateSchema)).toEqual({
            username: "user",
        });
    });
    test("should return empty object", () => {
        const state: DeepPartial<StateSchema> = {
            login: {},
        };
        expect(selectLoginState(state as StateSchema)).toEqual({});
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginState(state as StateSchema)).toEqual(undefined);
    });
});
