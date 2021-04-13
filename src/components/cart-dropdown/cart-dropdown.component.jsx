import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__cart-items" />
        <CustomButton additionalClasses={`custom-button--google`}>Go to cart</CustomButton>
    </div>
);


const mapStateToProps = state => {

}
export default CartDropdown;