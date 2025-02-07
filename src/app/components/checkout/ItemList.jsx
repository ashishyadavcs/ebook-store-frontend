import Link from "next/link";
import Button from "../ui/Button";
import ItemListStyles from "@/styles/itemlist.styled";

const ItemList = ({ items }) => {
    return (
        <ItemListStyles className="cart">
            {[...items].map((p, i) => (
                <div key={p._id} className="product">
                    <Link href={`/${p._id}`}>
                        <img height={100} width={200} src={p.coverImageUrl} />
                    </Link>
                    <div className="details">
                        <p>{p.title}</p>
                        <div className="btn-group">
                            <Button>&#8722;</Button>
                            <Button>1</Button>
                            <Button>+</Button>
                        </div>
                        <strong>Rs. 1000</strong>
                    </div>
                </div>
            ))}
        </ItemListStyles>
    );
};

export default ItemList;
