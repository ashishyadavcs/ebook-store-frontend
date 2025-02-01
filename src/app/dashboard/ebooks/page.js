import AddEbook from "@/components/ebook/AddEbook";
import EbookList from "@/components/ebook/EbookList";
import { useServerSideFetch } from "@/utils/ssr-api-call";
const EbooksPage = async () => {
    const {
        data: { ebooks },
    } = await useServerSideFetch("/api/user");
    return (
        <>
            <AddEbook />
            <h2>my ebooks</h2>
            <EbookList data={ebooks} />
        </>
    );
};

export default EbooksPage;
