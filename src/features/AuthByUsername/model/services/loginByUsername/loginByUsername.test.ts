import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("axios");

describe("loginByUsername.test", () => {
    test("sucсess login", async () => {
        const userValue = { username: "user", id: "1" };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue({
            data: userValue,
        });

        const result = await thunk.CallThunk({
            username: "user",
            password: "123",
        });
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.navigate).toHaveBeenCalledWith("/profile");
        expect(result.meta.requestStatus).toBe("fulfilled");
    });
    test("failed login", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue({
            status: 403,
        });

        const result = await thunk.CallThunk({
            username: "user",
            password: "123",
        });
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
