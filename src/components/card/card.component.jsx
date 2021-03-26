import './card.styles.scss'

const Card = ({imageUrl, price, name, rowCount}) => (
    <div className="card"
    style={{
        flexBasis: `${(100 - (rowCount-1))/rowCount}%`
    }}>
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