import EbookList from "@/components/ebook/EbookList";
import Button from "@/components/ui/Button";
import { useServerSideFetch } from "@/utils/ssr-api-call";
const EbooksPage = async () => {
    let ebooks = [];
    try {
        const result = await useServerSideFetch("/api/user-ebooks", {
            cache: "no-store",
        });
        ebooks = result.data.ebooks;
    } catch (err) {
        console.log(err);
    }
    return (
        <>
            {ebooks?.length == 0 ? (
                <div className="text-center">
                    <h2 className="title">No ebooks in your library</h2>
                    <Button type="primary" href="/">
                        exlore ebooks
                    </Button>
                </div>
            ) : (
                <>
                    <h2 className="title text-center">my ebooks</h2>
                    <EbookList data={ebooks} />
                </>
            )}
        </>
    );
};

export default EbooksPage;
