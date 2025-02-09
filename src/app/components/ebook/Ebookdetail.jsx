import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Review from "@/components/Review";
import Image from "next/image";
import Ebookdetails from "@/styles/ebookdetails.styled";
import config from "@/config/index";
import AddTocart from "@/components/ebook/AddTocart";
const Ebookdetail = async ({ id }) => {
    const req = await fetch(`${config.APP_URL}/api/ebooks/${id}`, {
        cache: "no-store",
    });
    let { data: ebook } = await req.json();
    ebook = ebook[0];
    return (
        <Ebookdetails>
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
