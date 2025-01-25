import Button from "@/components/Button";
import Container from "@/components/Container";
import ProfileStyle from "@/styles/profile.styled";
import React from "react";

const Profile = () => {
    return (
        <ProfileStyle>
            <Container>
                <h1>Profile</h1>
                <form>
                    <label htmlFor="email">
                        <input
                            defaultValue={"How to be successfull"}
                            name="title"
                            type="text"
                            required
                            placeholder="Ebook title"
                        />
                    </label>
                    <label htmlFor="author">
                        <input
                            defaultValue={"Ashish Kumar"}
                            name="author"
                            type="text"
                            required
                            placeholder="Ebook Author"
                        />
                    </label>
                    <label htmlFor="cover-image">
                        <input
                            required
                            name="coverImageUrl"
                            type="file"
                            accept="images/*"
                            placeholder="cover image"
                        />
                    </label>
                    <Button>add ebook</Button>
                </form>
            </Container>
        </ProfileStyle>
    );
};

export default Profile;
