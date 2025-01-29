import { ToastContainer, toast } from "react-toastify";
class Tostisy {
    success(msg) {
        return toast.success(msg);
    }
    info(msg) {
        return toast(msg);
    }
    error(msg) {
        return toast.error(msg);
    }
}

const toastify = new Tostisy();
const Toast = () => {
    return <ToastContainer position="bottom-left" autoClose="1000" theme="light" />;
};

export { Toast, toastify };
