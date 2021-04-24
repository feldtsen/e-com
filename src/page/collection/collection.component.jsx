import './collection.styles.scss';

import Card from "../../components/card/card.component";
import {connect} from 'react-redux';
import {selectShopCollection} from "../../redux/shop/shop.selector";
import {Link} from "react-router-dom";

const CollectionPage = ({collection}) =>  {
    const {items} = collection;
    return (
        <div className="collection">
            <Link to='/shop'><div className="collection__go-back">{`< go back to categories`}</div></Link>
            <div className="collection__container">
                {
                    items.map(item => (
                        <Card key={item.id} item={item} hoverable={true}/>
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