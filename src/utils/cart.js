export const calculateCart = items => {
    const totalitems = items.reduce((total, item) => total + item.quantity, 0);
    const totalprice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
        totalprice,
        totalitems,
    };
};
