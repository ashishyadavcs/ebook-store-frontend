import Button from "@/components/Button";
import Container from "@/components/Container";
import MyForm from "@/components/Form";
import ProfileStyle from "@/styles/profile.styled";
import React from "react";

const Profile = () => {
    return (
        <ProfileStyle>

                <h1 className="title">Profile</h1>
                <MyForm>
                    <label htmlFor="email">
                        <span>Name</span>
                        <input
                            defaultValue={"Ashish Kumar"}
                            name="title"
                            type="text"
                            required
                            placeholder="Name"
                        />
                    </label>
                    <label htmlFor="author">
                        <span>Email</span>
                        <input
                            defaultValue={"as@as.as"}
                            name="author"
                            type="text"
                            required
                            placeholder="Email"
                        />
                    </label>
                    <label htmlFor="cover-image">
                        <span>Mobile</span>
                        <input value={"+91-893567866"} required type="tel" placeholder="Mobile Number" />
                    </label>
                    <Button>save</Button>
                </MyForm>
   
        </ProfileStyle>
    );
};

export default Profile;
