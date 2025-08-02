import Container from "@/components/ui/Container";
import Image from "next/image";
import Ebookdetails from "@/styles/ebookdetails.styled";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import { constant } from "@/config/constant";
import { delay } from "@/utils/common";
import { notFound } from "next/navigation";
import EbookAction from "./EbookAction";
import { Suspense } from "react";
const Ebookdetail = async ({ id }) => {
    // await delay(200000)
    let ebook;
    try {
        const ebookResult = await useServerSideFetch(`/api/ebooks/${id}`);
        if (!ebookResult.success) {
            return notFound();
        }
        ebook = ebookResult?.data[0];
    } catch (err) {}
    const { coverImageUrl = constant.default_ebook, reviews = [], totalReviews = 0 } = ebook || {};

    return (
        <Ebookdetails>
            <span className="thumbnail mobile">
                <Image
                    priority
                    alt="ebook"
                    width={360}
                    height={400}
                    src={coverImageUrl || "/images/ebook.jpg"}
                />
            </span>
            <Container className="ebook-info">
                <span className="thumbnail">
                    <Image priority layout="fill" alt="ebook" src={coverImageUrl} />
                </span>

                <Suspense fallback={<div>Loading...</div>}>
                    <EbookAction ebook={ebook} />
                </Suspense>
            </Container>
            <Container className="ebook-review">
                {reviews.length > 0 && (
                    <>
                        <h3>Reviews & ratings ({totalReviews})</h3>
                        <ul className="reviews">
                            {reviews.map(
                                r =>
                                    r.review && (
                                        <li key={r._id}>
                                            <div className="ebook-rating">
                                                <span className="star" />
                                                {r.rating}
                                            </div>
                                            {r.review}
                                        </li>
                                    )
                            )}
                        </ul>
                    </>
                )}
            </Container>
        </Ebookdetails>
    );
};

export default Ebookdetail;
