const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const existingItem = state.data.find(p => p._id === payload._id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.data.push({ ...payload, quantity: 1 });
            }
        },
        removeFromCart: (state, { payload }) => {
            const existingItem = state.data.find(p => p._id === payload._id);
            if (existingItem && payload.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.data = state.data.filter(i => i._id !== payload._id);
            }
        },
        emptyCart: (state, { payload }) => {
            state.data = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
