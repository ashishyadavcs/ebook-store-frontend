"use client";
import { useEffect } from "react";

const ZustandProvider = ({ children }) => {
    useEffect(() => {
        // Initialize any global state here if needed
        // This is optional since Zustand doesn't require a provider
    }, []);

    return children;
};

export default ZustandProvider;
