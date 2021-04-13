import './cart-icon.styles.scss'
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";


export const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <span className="cart-icon--counter">cart 0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);