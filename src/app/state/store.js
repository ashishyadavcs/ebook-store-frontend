import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/state/userslice";
import { persiteTheReducer } from "@/state/persist";
const reducer = combineReducers({
    user: userReducer,
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
