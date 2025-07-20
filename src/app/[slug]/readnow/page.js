import Readingstyle from "@/styles/reading.styled";
import PDFViewer from "@/components/PDFViewer";
import { redirect } from "next/navigation";
import { useServerSideFetch } from "@/utils/ssr-api-call";

export default async function Page({ params }) {
    const { slug: ebookId } = await params;
    let ebook = null;
    let showDummy = false;
    try {
        // Fetch user and check ownership
        const userData = await useServerSideFetch("/api/user", { cache: "no-store" });
        const userEbooks = userData?.data?.ebooks || [];
        if (!userEbooks.some(e => e._id === ebookId)) return redirect("/unauthorized");
        // Fetch ebook
        const ebookData = await useServerSideFetch(`/api/ebooks/${ebookId}`);
        ebook = ebookData?.data?.[0];
        if (!ebook) throw new Error("Ebook not found");
        if (!ebook.fileUrl) showDummy = true;
    } catch {
        showDummy = true;
    }
    return (
        <Readingstyle className="container">
            <h1>{showDummy ? "Preview sample ebook" : ebook.title}</h1>
            <div className="pdf-viewer-wrapper">
                <PDFViewer url={showDummy ? "/dummy.pdf" : ebook.fileUrl} />
            </div>
        </Readingstyle>
    );
}
