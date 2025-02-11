import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Review from "@/components/Review";
import Image from "next/image";
import Ebookdetails from "@/styles/ebookdetails.styled";
import AddTocart from "@/components/ebook/AddTocart";
import { useServerSideFetch } from "@/utils/ssr-api-call";
const Ebookdetail = async ({ id }) => {
    let user, ebook;
    try {
        // const user = await useServerSideFetch("/api/user");
        // console.log(user);
        const ebookResult = await useServerSideFetch(`/api/ebooks/${id}`);
        ebook = ebookResult?.data[0];
    } catch (err) {
        console.log(err);
    }

    return (
        <Ebookdetails>
            <span className="thumbnail mobile">
                <Image
                    priority
                    layout="fill"
                    alt="ebook"
                    src={ebook?.coverImageUrl || "/images/ebook.jpg"}
                />
            </span>
            <Container>
                <span className="thumbnail">
                    <Image
                        priority
                        layout="fill"
                        alt="ebook"
                        src={ebook?.coverImageUrl || "/images/ebook.jpg"}
                    />
                </span>

                <div className="details">
                    <div className="info">
                        <div className="left">
                            <h1>{ebook?.title}</h1>
                            <p className="author">{ebook?.author}</p>
                            <strong>Free</strong>
                        </div>
                        <div className="btn-group">
                            <AddTocart ebook={ebook} />
                            <Button href={`/checkout?from=${id}`}>Buy Now</Button>
                        </div>
                    </div>
                    <p>{ebook?.description || "no description"}</p>
                    <Review ebookid={id} size={30} />
                </div>
            </Container>
        </Ebookdetails>
    );
};

export default Ebookdetail;
