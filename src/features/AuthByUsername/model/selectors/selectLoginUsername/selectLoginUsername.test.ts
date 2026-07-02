import { StateSchema } from "@/app/providers/StoreProvider";
import { selectLoginUsername } from "./selectLoginUsername";

describe("selectLoginUsername.test", () => {
    test("should return 123", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "user",
            },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual("user");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginUsername(state as StateSchema)).toEqual("");
    });
});
