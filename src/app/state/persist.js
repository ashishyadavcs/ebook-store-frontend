import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    serialize: true,
    storage,
};
export const persiteTheReducer = reducer => {
    return persistReducer(persistConfig, reducer);
};
