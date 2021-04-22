import './collection-preview.styles.scss'
import Cards from "../cards/cards.component";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {Link} from "react-router-dom";

const CollectionPreview = ({ collections, match }) => (
    collections.map(({title, items, routeName}) => (
        <div key={title} className="collection-preview" >
            <h1 className="collection-preview--title"><Link to={`${match.path}/${routeName}`}>{`${title}`} <span className="collection-preview--title--chevron">></span></Link></h1>

            <div className="collection-preview__container">
                <Cards items={items} nrToRenderMobile={3} nrToRenderDesktop={4}/>
            </div>
        </div>
    ))
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default  connect(mapStateToProps)(CollectionPreview);