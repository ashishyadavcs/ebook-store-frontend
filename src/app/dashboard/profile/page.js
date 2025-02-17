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

const Profile = () => {
    const [loading, setloading] = useState(false);
    const user = useAppSelector(state => state.user.data);
    const { name = "", email = "", mobile = "", image = constant.default_user } = user;
    const dispatch = useAppDispatch();
    const updateUser = async e => {
        e.preventDefault();
        try {
            setloading(true);
            const formdata = new FormData(e.target);
            formdata.delete("image");
            if (e.target.image.files[0]) {
                formdata.append("image", e.target.image.files[0]);
            }
            const res = await fetch("/api/user", {
                method: "PATCH",
                body: formdata,
                credentials: "include",
            });
            const result = await res.json();
            if (!result.success) {
                throw Error("user update failed");
            } else {
                dispatch(addUser(result.user));

                setloading(false);
                toastify.success("profile updated");
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <ProfileStyle>
            <MyForm onSubmit={updateUser}>
                <Upload name="image" imageURL={image} title="upload picture" />
                <label htmlFor="email">
                    <span>Name</span>
                    <input defaultValue={name} name="name" type="text" placeholder="Name" />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input defaultValue={email} name="email" type="text" placeholder="Email" />
                </label>
                <label htmlFor="mobile">
                    <span>Mobile</span>
                    <input
                        defaultValue={mobile}
                        name="mobile"
                        type="tel"
                        placeholder="Mobile Number"
                    />
                </label>

                <Button type="primary" loading={loading}>
                    update profile
                </Button>
            </MyForm>
        </ProfileStyle>
    );
};

export default Profile;
