import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/state/userslice";
import { persiteTheReducer } from "@/state/persist";
const reducer = combineReducers({
    user: userReducer,
});
export const store = configureStore({
    reducer: persiteTheReducer(reducer),
});
export default store;
