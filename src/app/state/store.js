import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/state/userslice";
import cartReducer from "@/state/cart";
import { persiteTheReducer } from "@/state/persist";
const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});
export const makeStore = () => {
    return configureStore({
        reducer: persiteTheReducer(reducer),
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
                },
            }),
    });
};
