import "./checkout-item.styles.scss"
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.action";


export const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;

    return (
        <div className="checkout-item">
            <img src={imageUrl} />
            <div>{name}</div>
            <div>
                <span onClick={()=>removeItem(cartItem)}>&#10094;</span>
                {quantity}
                <span onClick={()=> addItem(cartItem)}>&#10095;</span>
            </div>
            <div>${price}</div>
            <div onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatach => ({
    clearItem: item => dispatach(clearItemFromCart(item)),
    removeItem: item => dispatach(removeItem(item)),
    addItem: item => dispatach(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);