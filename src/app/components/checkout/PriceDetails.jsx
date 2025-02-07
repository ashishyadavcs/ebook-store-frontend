import PriceDetailStyles from "@/styles/pricedetail.styled";

const PriceDetails = () => {
    return (
        <PriceDetailStyles className="price-details">
            <h3>Price details</h3>
            <ul>
                <li>
                    price(1 item) <span>$1879</span>
                </li>
                <li>
                    Total Payable <span>$2879</span>
                </li>
            </ul>
        </PriceDetailStyles>
    );
};

export default PriceDetails;
