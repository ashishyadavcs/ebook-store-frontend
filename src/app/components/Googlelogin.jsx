import { config } from "../../config/index.js";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
const Googlelogin = ({ title = "Login with" }) => {
    return (
        <Button type="link" href={`${config.BASE_URL}/auth/google`}>
            {title} <FcGoogle />
        </Button>
    );
};

export default Googlelogin;
