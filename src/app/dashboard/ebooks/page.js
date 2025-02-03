import AddEbook from "@/components/ebook/AddEbook";
import EbookList from "@/components/ebook/EbookList";
import { toastify } from "@/components/Toast";
import { useServerSideFetch } from "@/utils/ssr-api-call";
const EbooksPage = async () => {
    let ebooks = [];
    try {
        const result = await useServerSideFetch("/api/user");
        ebooks = result.data.ebooks;
    } catch (err) {}
    return (
        <>
            <AddEbook />
            <h2>my ebooks</h2>
            <EbookList data={ebooks.reverse()} />
        </>
    );
};

export default EbooksPage;
