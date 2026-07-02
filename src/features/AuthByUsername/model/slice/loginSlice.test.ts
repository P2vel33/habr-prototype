import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "123" };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername("1111"))
        ).toEqual({ username: "1111" });
    });
    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "123" };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword("1111"))
        ).toEqual({ password: "1111" });
    });
    test("test set isLoading", () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };
        const loginArgs = { username: "user", password: "123" };
        const user = { id: "1", username: "user" };

        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.pending("requestId", loginArgs)
            )
        ).toEqual({ isLoading: true });
        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.fulfilled(user, "requestId", loginArgs)
            )
        ).toEqual({ isLoading: false, username: "user" });
        expect(
            loginReducer(
                state as LoginSchema,
                loginByUsername.rejected(null, "requestId", loginArgs, "error")
            )
        ).toEqual({ isLoading: false, error: "error" });
    });
});
