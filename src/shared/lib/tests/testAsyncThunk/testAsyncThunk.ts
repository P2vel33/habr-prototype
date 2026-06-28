import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    getState: () => StateSchema;

    navigate: jest.MockedFn<any>;

    api: {
        post: jest.MockedFn<any>;
        get: jest.MockedFn<any>;
        delete: jest.MockedFn<any>;
        put: jest.MockedFn<any>;
    };

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = {
            post: jest.fn(),
            get: jest.fn(),
            delete: jest.fn(),
            put: jest.fn(),
        };
        this.navigate = jest.fn();
    }

    async CallThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
