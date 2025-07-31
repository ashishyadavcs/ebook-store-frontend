export const sendAPIRequest = async (url, options) => {
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    options = { ...defaultOptions, ...options };

    const response = await fetch(url, options);
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
};
