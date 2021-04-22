import './cart-item.styles.scss';

const CartItem = ({imageUrl, name, quantity, price}) => (
    <div className="cart-item">
        <img alt="cart item" className="cart-item--image" src={imageUrl}/>
        <div className="cart-item__details">
                <div className="cart-item__details--name">{`${name}`}</div>
                <div className="cart-item__details--price">{`${quantity} x $${price}`}</div>
        </div>
    </div>
)

export default CartItem;