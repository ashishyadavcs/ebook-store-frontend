"use client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { useEffect, useRef, useState } from "react";
import { makeStore } from "@/state/store";
import dynamic from "next/dynamic";
import Loader from "@/components/loaders/Loader";
import Container from "@/components/ui/Container";
const PersistGate = dynamic(() =>
    import("redux-persist/integration/react").then(mod => mod.PersistGate)
);
const ReduxProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    const storeRef = useRef();

    useEffect(() => {
        setIsClient(true);
        if (!storeRef.current) {
            storeRef.current = makeStore();
            storeRef.current.persistor = persistStore(storeRef.current);
        }
    }, []);

    if (!isClient) {
        const serverStore = makeStore();
        return <Provider store={serverStore}>{children}</Provider>;
    }

    if (!storeRef.current) {
        return (
            <Container>
                <Loader />
            </Container>
        );
    }

    return (
        <Provider store={storeRef.current}>
            {/* <PersistGate loading={null} persistor={storeRef.current.persistor}> */}
            {children}
            {/* </PersistGate> */}
        </Provider>
    );
};
export default ReduxProvider;
