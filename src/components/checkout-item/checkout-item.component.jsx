import "./checkout-item.styles.scss"


export const CheckoutItem = ({cartItem: {imageUrl, name, quantity, price}}) => {

    return (
        <div className="checkout-item">
                <img src={imageUrl} />
                <div>{name}</div>
                <div><span>{`<`}</span> {quantity} <span>></span></div>
                <div>${price}</div>
                <div>&#10005;</div>
        </div>
    )
}
export default CheckoutItem;