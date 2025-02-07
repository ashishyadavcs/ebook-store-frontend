const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.data = [...state.data, payload];
        },
        removeFromCart: (state, { payload }) => {
            state.data = state.data.filter(i => (i._id = payload._id));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
