"use client";
import useUserStore from "@/state/stores/userStore";

const Page = () => {
    const { user } = useUserStore();
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
