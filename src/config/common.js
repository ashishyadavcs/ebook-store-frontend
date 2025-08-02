export const ismobile = agent => {
    if (!agent && typeof navigator == "undefined") return;
    agent = agent || navigator.userAgent;
    const ipad = /iPad/i.test(agent);
    const isMobile =
        /Mobile|Android|webOS|iPhone|BlackBerry|Windows Phone/i.test(agent) && !ipad ? true : false;
    return isMobile;
};
