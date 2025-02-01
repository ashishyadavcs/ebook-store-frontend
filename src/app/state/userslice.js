import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
    },
    reducers: {
        addUser: (state, { payload, type = "ADDUSER" }) => {
            console.log("checks", state.data, payload);
            state.data = payload;
        },
        removeuser: (state, { payload, type = "removeuser" }) => {
            console.log("checks", state.data, payload);
            state.data = payload || null;
        },
    },
});
export const { addUser, removeuser } = userSlice.actions;
export default userSlice.reducer;
