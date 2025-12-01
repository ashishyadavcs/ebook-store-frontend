import { logout } from "../app/actions/logout";

export const logoutUser = async clearUser => {
    await logout();
    clearUser();
};
