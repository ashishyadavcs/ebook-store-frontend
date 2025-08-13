"use client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { useRef } from "react";
import { makeStore } from "./store";
import dynamic from "next/dynamic";
import Loader from "@/components/loaders/Loader";
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
    const PersistProvider = ({ children }) => {
        if (typeof window === "undefined") return <>{children}</>;
        return (
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
        );
    };
    return (
        <Provider store={storeRef.current}>
            <PersistProvider>{children}</PersistProvider>
        </Provider>
    );
};
export default ReduxProvider;
