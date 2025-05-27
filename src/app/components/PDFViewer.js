"use client";
import { useRef } from "react";

const PDFViewer = ({ url }) => {
    const iframeRef = useRef(null);
    if (!url) return <div>PDF not available.</div>;
    return (
        <iframe
            ref={iframeRef}
            src={url + "#toolbar=0&navpanes=0&scrollbar=1"}
            title="Ebook PDF"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "70vh" }}
            allowFullScreen
        />
    );
};

export default PDFViewer;
