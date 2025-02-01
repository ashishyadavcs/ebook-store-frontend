"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/state/store";

const ReduxProvider = ({ children }) => {
    let persister = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                {children}
            </PersistGate>
        </Provider>
    );
};
export default ReduxProvider;
