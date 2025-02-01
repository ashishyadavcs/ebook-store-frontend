import Button from "@/components/ui/Button";
import MyForm from "@/components/ui/Form";
import ProfileStyle from "@/styles/profile.styled";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import Upload from "./upload";

const Profile = async () => {
    const {
        data: { user },
    } = await useServerSideFetch("/api/user");

    const saveUser = async formdata => {
        "use server";
        const response = await useServerSideFetch("/api/user", {
            method: "PATCH",
            body: formdata,
        });

        console.log({ response });
    };

    return (
        <ProfileStyle>
            <MyForm action={saveUser}>
                <Upload user={user} />
                <label htmlFor="email">
                    <span>Name</span>
                    <input
                        defaultValue={user.name}
                        name="name"
                        type="text"
                        required
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="author">
                    <span>Email</span>
                    <input
                        defaultValue={user.email}
                        name="email"
                        type="text"
                        required
                        placeholder="Email"
                    />
                </label>

                <Button>save profile</Button>
            </MyForm>
        </ProfileStyle>
    );
};

export default Profile;
