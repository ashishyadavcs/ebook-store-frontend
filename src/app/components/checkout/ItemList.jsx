"use client";
import Link from "next/link";
import Button from "../ui/Button";
import ItemListStyles from "@/styles/itemlist.styled";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { addToCart, removeFromCart } from "@/state/cart";

const ItemList = () => {
    const cart = useAppSelector(state => state.cart.data);
    const dispatch = useAppDispatch();
    const addItem = p => {
        dispatch(addToCart(p));
    };
    const removeItem = p => {
        dispatch(removeFromCart(p));
    };
    return (
        <ItemListStyles className="cart">
            {cart.length > 0 && (
                <div className="products">
                    {[...cart].map((p, i) => (
                        <div key={i} className="product">
                            <Link href={`/${p._id}`}>
                                <img height={100} width={200} src={p.coverImageUrl} />
                            </Link>
                            <div className="details">
                                <p>{p.title}</p>
                                <div className="btn-group">
                                    <Button onClick={e => removeItem(p)}>&#8722;</Button>
                                    <Button>{p.quantity}</Button>
                                    <Button onClick={e => addItem(p)}>+</Button>
                                </div>
                                <strong>Rs {p.price}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 ? (
                <div className="btn-wrap">
                    <Button href="/checkout">Place order</Button>
                </div>
            ) : (
                <Button href="/">go to home</Button>
            )}
        </ItemListStyles>
    );
};

export default ItemList;
