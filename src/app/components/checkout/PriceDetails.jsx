"use client";
import { memo } from "react";
import Button from "@/components/ui/Button";

const PriceItem = ({ label, value, className = "" }) => (
    <li className={className}>
        <span>{label}</span>
        <span>{value}</span>
    </li>
);

const formatCurrency = amount => `₹${amount.toLocaleString("en-IN")}`;

const PriceDetails = memo(({ totalItems, totalPrice, totalDiscount }) => {
    const finalPrice = totalPrice - totalDiscount;

    return (
        <div className="price-details">
            <div className="price-card">
                <h2>Price Details</h2>
                <ul>
                    <PriceItem
                        label={`Price (${totalItems} item${totalItems !== 1 ? "s" : ""})`}
                        value={formatCurrency(totalPrice)}
                    />

                    {totalDiscount > 0 && (
                        <PriceItem
                            className="discount"
                            label="Discount"
                            value={`-${formatCurrency(totalDiscount)}`}
                        />
                    )}

                    <PriceItem
                        className="total"
                        label="Total Payable"
                        value={formatCurrency(finalPrice)}
                    />
                </ul>

                <div className="actions">
                    <Button type="primary" href="/checkout" className="checkout-btn">
                        Proceed To Checkout
                    </Button>
                    <Button type="secondary" href="/" className="continue-btn">
                        Continue Shopping
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default PriceDetails;
