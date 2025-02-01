import { removeuser } from "@/state/userslice";
import { logout } from "../app/actions/logout";

export const logoutUser = async dispatch => {
    await logout();
    dispatch(removeuser(null));
};
