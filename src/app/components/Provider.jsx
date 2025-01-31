"use client";
import { Provider } from "react-redux";
import store from "@/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

const ReduxProvider = ({ children }) => {
    return (
        <PersistGate loading={null} persistor={persister}>
            <Provider store={store}>{children}</Provider>
        </PersistGate>
    );
};
export default ReduxProvider;
