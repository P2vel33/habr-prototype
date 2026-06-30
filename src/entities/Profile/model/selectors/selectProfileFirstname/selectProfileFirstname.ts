import { StateSchema } from "@/app/providers/StoreProvider";

export const selectProfileFirstname = (state: StateSchema) =>
    state.profile?.data?.firstname || "";
