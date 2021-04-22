import './card.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const Card = ({item, addItem}) => {
    const {imageUrl, price, name} = item;

    return (
        <div className="card" >
            <div className="card__image-container ">
                <img alt='' src={imageUrl} className="card__image-container--image fade"/>
            </div>
            <CustomButton onClick={()=>addItem(item)} additionalClasses="hide custom-button--card">add to cart</CustomButton>
            <div className="card__description hide">
                <p>{name}</p>
                <p>{`${price}$`}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card);