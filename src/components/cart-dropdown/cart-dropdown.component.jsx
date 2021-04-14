import './cart-dropdown.styles.scss';
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import {toggleCartHidden} from "../../redux/cart/cart.action";

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__cart-items" >
            {
                cartItems.length
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)
                : <div className="cart-dropdown--empty-message">The cart is empty</div>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }} additionalClasses={`custom-button--google`}>Go to cart</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));