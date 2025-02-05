import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.data = payload;
        },
        removeuser: (state, { payload }) => {
            state.data = payload || null;
        },
    },
});
export const { addUser, removeuser } = userSlice.actions;
export default userSlice.reducer;
