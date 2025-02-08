"use client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { useRef } from "react";
import { makeStore } from "./store";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Container from "@/components/ui/Container";
const PersistGate = dynamic(
    () => import("redux-persist/integration/react").then(mod => mod.PersistGate),
    { ssr: false }
);
const ReduxProvider = ({ children }) => {
    const storeRef = useRef(undefined);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    let persister = persistStore(storeRef.current);
    return (
        <Provider store={storeRef.current}>
            <PersistGate
                loading={
                    <Container>
                        <Loader />
                    </Container>
                }
                persistor={persister}
            >
                {children}
            </PersistGate>
        </Provider>
    );
};
export default ReduxProvider;
