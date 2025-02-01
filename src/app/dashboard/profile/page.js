import Button from "@/components/ui/Button";
import MyForm from "@/components/ui/Form";
import ProfileStyle from "@/styles/profile.styled";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import Upload from "./upload";

const Profile = async () => {
    const {
        data: { user },
    } = await useServerSideFetch("/api/user");
    return (
        <ProfileStyle>
            <h1 className="title">Profile</h1>
            <MyForm>
                <Upload user={user} />
                <label htmlFor="email">
                    <span>Name</span>
                    <input
                        defaultValue={user.name}
                        name="title"
                        type="text"
                        required
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="author">
                    <span>Email</span>
                    <input
                        defaultValue={user.email}
                        name="author"
                        type="text"
                        required
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="cover-image">
                    <span>Mobile</span>
                    <input
                        defaultValue={user.mobile}
                        required
                        type="tel"
                        placeholder="Mobile Number"
                    />
                </label>
                <Button>save</Button>
            </MyForm>
        </ProfileStyle>
    );
};

export default Profile;
