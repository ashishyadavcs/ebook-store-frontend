import EbookList from "@/components/ebook/EbookList";
import { useServerSideFetch } from "@/utils/ssr-api-call";
const EbooksPage = async () => {
    let ebooks = [];
    try {
        const result = await useServerSideFetch("/api/user");
        ebooks = result.data.ebooks;
    } catch (err) {}
    return (
        <>
            <h2>my ebooks</h2>
            <EbookList data={ebooks.reverse()} />
        </>
    );
};

export default EbooksPage;
