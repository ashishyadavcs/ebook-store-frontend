"use client";
import Button from "@/components/ui/Button";
import MyForm from "@/components/ui/Form";
import ProfileStyle from "@/styles/profile.styled";
import Upload from "@/components/ui/upload";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { useState } from "react";
import { toastify } from "@/components/Toast";
import { addUser } from "@/state/userslice";
import { constant } from "@/config/constant";
import { useForm } from "@/hooks/useForm";
import { usePathname, useRouter } from "next/navigation";
import VerifyEmail from "@/components/VerifyEmail";
import ModalWrapper from "@/components/ModalWrapper";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Profile = () => {
    const router = useRouter();
    const currentURL = usePathname();
    const [loading, setloading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useAppSelector(state => state.user.data);
    console.log(user);
    const { name = "", email = "", mobile = "", image = constant.default_user } = user || {};
    const { handleChange, values } = useForm();
    const dispatch = useAppDispatch();
    const updateUser = async e => {
        e.preventDefault();
        try {
            setloading(true);
            const formdata = new FormData();
            Object.keys(values).forEach(field => {
                if (field == "email") return;
                formdata.append(field, values[field]);
            });

            const res = await fetch("/api/user", {
                method: "PATCH",
                body: formdata,
                credentials: "include",
            });
            if (res.status === 401) {
                toastify.error("session expired, please login again");
                router.push(`/login?from=${currentURL}`);
                return;
            }
            if (!res.ok) {
                throw Error(res.statusText);
            }
            const result = await res.json();
            dispatch(addUser(result.user));
            setloading(false);
            toastify.success("profile updated");
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <ProfileStyle>
            <ModalWrapper size={400} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <VerifyEmail userdata={user} setIsModalOpen={setIsModalOpen} />
            </ModalWrapper>
            <MyForm onSubmit={updateUser}>
                <Upload
                    onchange={handleChange}
                    name="image"
                    imageURL={image}
                    title="upload picture"
                />
                <label htmlFor="email">
                    <div>
                        <span>Email</span>
                        <Button
                            disabled={user.verified}
                            type="default"
                            btnType="button"
                            className={`verify-btn ${user.verified ? "verified" : ""}`}
                            onClick={() => setIsModalOpen(true)}
                        >
                            {user.verified ? (
                                <>
                                    <IoIosCheckmarkCircle size={16} color="lime" /> verified
                                </>
                            ) : (
                                "verify"
                            )}
                        </Button>
                    </div>

                    <input
                        onChange={handleChange}
                        readOnly
                        disabled
                        defaultValue={email}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="name">
                    <span>Name</span>
                    <input
                        onChange={handleChange}
                        defaultValue={name}
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="mobile">
                    <span>Mobile</span>
                    <input
                        defaultValue={mobile}
                        name="mobile"
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                    />
                </label>

                <Button disabled={!values} type="primary" loading={loading}>
                    update profile
                </Button>
            </MyForm>
        </ProfileStyle>
    );
};

export default Profile;
