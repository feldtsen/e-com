import './collection.styles.scss';

import Card from "../../components/card/card.component";
import {connect} from 'react-redux';
import {selectShopCollection} from "../../redux/shop/shop.selector";
import {Link} from "react-router-dom";

const CollectionPage = ({match, collection}) =>  {
    const {title, items} = collection;
    return (
        <div className="collection">
            <Link to='/shop'>{`< go back to categories`}</Link>
            <h2 className="collection-title">{title}</h2>
            <div className="collection__container">
                {
                    items.map(item => (
                        <Card key={item.id} item={item}/>
                    ))
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);