import PriceDetailStyles from "@/styles/pricedetail.styled";
import { calculateCart } from "@/utils/cart";

const PriceDetails = ({ items }) => {
    const { totalitems, totalprice } = calculateCart(items);
    return (
        <PriceDetailStyles className="price-details">
            <h3>Price details</h3>
            <ul>
                <li>
                    price({totalitems} item) <span>&#8377;{totalprice}</span>
                </li>
                <li>
                    Total Payable <span>&#8377;{totalprice}</span>
                </li>
            </ul>
        </PriceDetailStyles>
    );
};

export default PriceDetails;
