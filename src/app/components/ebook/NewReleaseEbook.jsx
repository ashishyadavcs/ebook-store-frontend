import Link from "next/link";
const NewReleaseEbook = () => {
    return (
        <>
            <h2>New Release Books</h2>
            <p>1000+ books are published by different authors everyday. </p>
            <Link className="link" href={""}>
                View all products &rarr;
            </Link>
        </>
    );
};

export default NewReleaseEbook;
