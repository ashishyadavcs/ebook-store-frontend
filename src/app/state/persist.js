import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    serialize: true,
    storage,
    whitelist: ["user"],
};
export const persiteTheReducer = reducer => {
    return persistReducer(persistConfig, reducer);
};
