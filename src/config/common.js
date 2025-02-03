export const ismobile = () => {
    if (typeof navigator == "undefined") return;
    const ipad = /iPad/i.test(agent);
    const isMobile =
        /Mobile|Android|webOS|iPhone|BlackBerry|Windows Phone/i.test(agent) && !ipad ? true : false;
    return isMobile;
};
