import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__cart-items" >
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)
            }
        </div>
        <CustomButton additionalClasses={`custom-button--google`}>Go to cart</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);