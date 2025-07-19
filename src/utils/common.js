export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const throttling = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export const getDeviceId = () => {
    if (typeof window !== "undefined") {
        if (!localStorage.getItem("deviceId")) {
            localStorage.setItem("deviceId", crypto.randomUUID());
        }
        return localStorage.getItem("deviceId") || "unknown-device";
    }
    return "unknown-device";
};
