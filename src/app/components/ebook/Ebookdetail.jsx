import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Review from "@/components/Review";
import Image from "next/image";
import Ebookdetails from "@/styles/ebookdetails.styled";
import AddTocart from "@/components/ebook/AddTocart";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
const Ebookdetail = async ({ id }) => {
    let purhcasedEbooks, ebook, paid;
    try {
        const userResult = await useServerSideFetch("/api/user");
        purhcasedEbooks = userResult.data.ebooks;
        paid = purhcasedEbooks.find(el => el._id == id);
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
                    alt="ebook"
                    width={360}
                    height={400}
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
                            <p>{ebook?.description || "no description"}</p>
                            <p className="author">
                                <FaUserGraduate /> {ebook?.author}
                            </p>
                            <strong className={`price ${paid ? "paid" : ""}`}>
                                {paid ? "purchased" : "Free"}
                            </strong>
                        </div>
                        <div className="btn-group">
                            {paid ? (
                                <Button type="primary" href={`/${id}/readnow`}>
                                    Read Ebook <FaBookReader />
                                </Button>
                            ) : (
                                <>
                                    <AddTocart ebook={ebook} />
                                    <Button type="primary" href={`/checkout?from=${id}`}>
                                        Buy Now
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>

                    {paid && <Review ebookid={id} size={30} />}
                </div>
            </Container>
        </Ebookdetails>
    );
};

export default Ebookdetail;
