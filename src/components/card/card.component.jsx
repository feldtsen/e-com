import './card.styles.scss'

const Card = ({imageUrl, price, name}) => (
    <div className="card">
        <div className="card__image-container ">
            <img alt='' src={imageUrl} className="card__image-container--image fade"/>
        </div>
        <button className="card--button hide">add to cart</button>
        <div className="card__description hide">
            <p>{name}</p>
            <p>{`${price}$`}</p>
        </div>
    </div>
)

export default Card;