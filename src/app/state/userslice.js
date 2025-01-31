import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state, { payload }) => {
            state.data = payload;
        },
        removeuser: state => {
            state.data = null;
        },
    },
});
export const { addUser, removeuser } = userSlice.actions;
export default userSlice.reducer;
