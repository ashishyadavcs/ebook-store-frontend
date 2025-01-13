export const logout = async () => {
    const res = await fetch("/api/auth/logout", {
        method: "POST",
        body: JSON.stringify({
            token: token.get("refreshtoken")?.value,
        }),
    });
    const result = await res.json();
};
