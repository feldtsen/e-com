import './collection-preview.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {Link} from "react-router-dom";

const CollectionPreview = ({ collections, match }) => (
    <div className="collection-preview">
        {
            collections.map(({title, items, routeName, previewImage}) => (
                <div key={title} className="collection-preview__item">
                    <Link className="collection-preview__item--link" to={`${match.path}/${routeName}`}>{`${title}`}
                        <span className="collection-preview__item--chevron">></span>
                    </Link>
                    <img alt="category" className="collection-preview__item__image" src={previewImage}/>
                </div>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default  connect(mapStateToProps)(CollectionPreview);