"use client";
import { memo, useCallback } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MdDelete } from "react-icons/md";
import useCartStore from "@/state/stores/cartStore";

const formatCurrency = amount => `₹${amount.toLocaleString("en-IN")}`;

const BookCover = memo(({ src, title }) => {
    if (!src) {
        return (
            <div className="placeholder-image" aria-label={`${title} cover image placeholder`} />
        );
    }

    return (
        <Image
            src={src}
            alt={`${title} cover`}
            width={100}
            height={150}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
    );
});

// Price display component
const PriceDisplay = memo(({ originalPrice, currentPrice }) => (
    <>
        {originalPrice && <div className="original">{formatCurrency(originalPrice)}</div>}
        <div className="current">{formatCurrency(currentPrice)}</div>
    </>
));

// Quantity control component
const QuantityControl = memo(({ quantity, onIncrease, onDecrease }) => (
    <div className="quantity-controls">
        <Button
            className="quantity-btn"
            onClick={onDecrease}
            aria-label="Decrease quantity"
            type="default"
        >
            −
        </Button>
        <span className="quantity">{quantity || 1}</span>
        <Button
            className="quantity-btn"
            onClick={onIncrease}
            aria-label="Increase quantity"
            type="default"
        >
            +
        </Button>
    </div>
));

// Cart item component
const CartItem = memo(({ item }) => {
    const dispatch = useAppDispatch();

    const handleAddItem = useCallback(() => {
        dispatch(addToCart(item));
    }, [dispatch, item]);

    const handleRemoveItem = useCallback(() => {
        dispatch(removeFromCart(item));
    }, [dispatch, item]);

    const handleRemoveCompletely = useCallback(() => {
        dispatch(removeFromCart({ ...item, quantity: 0 }));
    }, [dispatch, item]);

    return (
        <div className="cart-item">
            <div className="item-image">
                <BookCover src={item.coverImageUrl} title={item.title} />
            </div>
            <div className="item-info">
                <h3>{item.title}</h3>
                <p className="author">{item.author || "Robert C. Martin"}</p>
                <QuantityControl
                    quantity={item.quantity}
                    onIncrease={handleAddItem}
                    onDecrease={handleRemoveItem}
                />
            </div>
            <div className="item-price">
                <PriceDisplay originalPrice={item.originalPrice} currentPrice={item.price} />
                <Button
                    className="remove-btn"
                    onClick={handleRemoveCompletely}
                    aria-label={`Remove ${item.title} from cart`}
                    type="default"
                >
                    <MdDelete size={20} />
                </Button>
            </div>
        </div>
    );
});

// Main ItemList component
const ItemList = memo(({ items }) => {
    if (!items?.length) {
        return null;
    }

    return (
        <div className="cart-items">
            <div className="cart-header">Cart Items ({items.length})</div>
            {items.map(item => (
                <CartItem key={item._id || item.id} item={item} />
            ))}
        </div>
    );
});

export default ItemList;
