import Back from "@/components/Back";
import UpdateEbook from "@/components/ebook/UpdateEbook";
import { useServerSideFetch } from "@/utils/ssr-api-call";

const Page = async ({ params }) => {
    const { slug: id } = await params;
    const ebookResult = await useServerSideFetch(`/api/ebooks/${id}`);
    const ebook = ebookResult?.data[0];
    console.log(ebook);
    return (
        <>
            <Back title="Edit Ebook" />
            <UpdateEbook ebook={ebook} />
        </>
    );
};

export default Page;
