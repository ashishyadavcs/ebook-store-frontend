import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
const Googlelogin = ({ title = "Login with" }) => {
    return (
        <Button type="link" href="http://localhost:4000/auth/google">
            {title} <FcGoogle />
        </Button>
    );
};

export default Googlelogin;
