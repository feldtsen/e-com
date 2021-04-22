import "./checkout.styles.scss";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-page__header">
            {
                /*
                ["Product", "Description", "Quantity", "Price", "Remove"].map(title => (
                    <div key={`checkout-${title}`} className="checkout-page__header__block">
                        <span>{title}</span>
                    </div>
                ))
                 */
            }

        </div>
        <div className="checkout-page__items">
        {
            cartItems.map(cartItem =>(
               <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        </div>
        <div className="checkout-page__total">The total price: {total}</div>
        <div className="checkout-page__test-warning">
            <h1>* Please use the following test credit card for payment</h1>
            <br/>
            <p>4242 4242 4242 4242</p>
            <p>CVV: 123</p>
            <p>Exp: 01/22</p>
        </div>
        <StripeButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);