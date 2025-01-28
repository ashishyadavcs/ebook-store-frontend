import { ToastContainer, toast } from "react-toastify";
class Tostisy {
    success(msg) {
        return toast.success(msg);
    }
    error(msg) {
        return toast.error(msg);
    }
}

const toastify = new Tostisy();
const Toast = () => {
    return <ToastContainer position="bottom-right" autoClose="1000" theme="light" />;
};

export { Toast, toastify };
