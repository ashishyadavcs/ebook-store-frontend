"use client";
import { useAppSelector } from "@/state/hooks";

const Page = () => {
    const user = useAppSelector(state => state.user.data);
    return (
        <>
            <h1 className="text-center">
                Hi, <span className="gradient-text">{user?.name}</span>
                <br /> Welcome back to dashboard
            </h1>
        </>
    );
};

export default Page;
