export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export const throttling = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};
