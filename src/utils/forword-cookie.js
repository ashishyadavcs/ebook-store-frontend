export const forwordCookieToClient = (api_res, next_res) => {
    const resSetCookies = api_res.headers.getSetCookie();
    if (resSetCookies) {
        resSetCookies.forEach(setcookie => {
            next_res.headers.append("Set-Cookie", setcookie);
        });
    }
};