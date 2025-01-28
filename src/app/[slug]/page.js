import Button from "@/components/Button";
import Container from "@/components/Container";
import Review from "@/components/Review";
import config from "@/config/index";
import Ebookdetails from "@/styles/ebookdetails.styled";
import Image from "next/image";

const Page = async ({ params }) => {
    const { slug: ebookid } = await params;
    const req = await fetch(`${config.APP_URL}/api/ebooks/${ebookid}`);
    const { data: ebook } = await req.json();
    return (
        <Ebookdetails>
            <Container>
                <span className="thumbnail">
                    <Image
                        priority
                        layout="fill"
                        alt="ebook"
                        src={ebook.coverImageUrl || "/images/ebook.jpg"}
                    />
                </span>

                <div className="details">
                    <div className="info">
                        <div className="left">
                            <h1>The Infinite</h1>
                            <p className="author">Clea Shearer . Joanna Teplin (2023)</p>
                            <strong>Free</strong>
                        </div>
                        <Button>Read Now</Button>
                    </div>
                    <p>
                        The Invincible is a gripping tale of courage, resilience, and the unyielding
                        human spirit. This eBook takes you on a thrilling journey through uncharted
                        territories, where survival depends on ingenuity and inner strength.
                        Blending elements of science fiction, mystery, and philosophy, the story
                        challenges conventional perceptions of intelligence, life, and our place in
                        the universe. Follow the crew of The Invincible, a technologically advanced
                        spaceship, as they embark on a perilous mission to investigate the
                        disappearance of their sister ship on a mysterious planet. What they uncover
                        is a chilling evolution of machines, a testament to the relentless power of
                        adaptation and survival.
                    </p>
                    <Review ebookid={ebookid} size={30} />
                </div>
            </Container>
            <Container></Container>
        </Ebookdetails>
    );
};

export default Page;
