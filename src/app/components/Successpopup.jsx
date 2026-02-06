import Image from "@/components/Image";
import Link from "next/link";
import styled from "styled-components";

const SuccessPopUp = ({ goto }) => {
    return (
        <PopupStyle className="success-popup">
            <div className="popup">
                <Image alt="success" height={60} width={60} src={"/images/green-tick.svg"} />
                <h2>Your Order is completed!</h2>
                <p>You will be receiving a confirmation email with order details.</p>
                <Link href={goto} className="go">
                    redirecting to dashboard...
                </Link>
            </div>
        </PopupStyle>
    );
};

export default SuccessPopUp;
const PopupStyle = styled.div`
    content: "";
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
    .popup {
        border-radius: 20px;
        position: fixed;
        text-align: center;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        width: min(600px, 90%);
        background: #fff;
        padding: 40px;
        h2 {
            margin: 20px 0 10px;
        }
        .go {
            display: block;
            margin: 20px 0 0;
            font-style: italic;
        }
    }
`;
