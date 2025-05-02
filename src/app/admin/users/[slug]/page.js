import Button from "@/components/ui/Button";
import MyForm from "@/components/ui/Form";
import Upload from "@/components/ui/upload";
import { constant } from "@/config/constant";
import ProfileStyle from "@/styles/profile.styled";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
    const { slug: id } = await params;
    let user = {};
    try {
        const { data } = await useServerSideFetch(`/api/user/${id}`);
        if (!data.user) {
            return notFound();
        }
        user = data.user;
    } catch (err) {
        return notFound();
    }
    const { name = "", email = "", mobile = "", image = constant.image } = user || {};
    return (
        <ProfileStyle>
            <MyForm>
                <Upload readonly={true} name="image" imageURL={image} title="upload picture" />
                <label htmlFor="email">
                    <span>Name</span>
                    <input
                        readOnly
                        defaultValue={name}
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                        readOnly
                        defaultValue={email}
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                </label>
                <label htmlFor="mobile">
                    <span>Mobile</span>
                    <input
                        defaultValue={mobile}
                        name="mobile"
                        readOnly
                        type="tel"
                        placeholder="Mobile Number"
                    />
                </label>
            </MyForm>
        </ProfileStyle>
    );
};

export default Page;
