export const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemAlreadyExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (cartItemAlreadyExist) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +  1}
                : cartItem
        ))
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const cartItemAlreadyExist = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (cartItemAlreadyExist.quantity === 1) {
        return clearItemFromCart(cartItems, cartItemToRemove);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
}
