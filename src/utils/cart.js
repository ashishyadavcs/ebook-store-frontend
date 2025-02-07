const dispatch = useAppDispatch();
export const addCartItem = ebook => {
    dispatch(addToCart(ebook));
};
