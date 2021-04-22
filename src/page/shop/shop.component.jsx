import CollectionPreview from "../../components/collection-preview/collection-preview.compononent";
import './shop.styles.scss';

import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => (
    <div className="shop">
        <div className="shop__container">
            <Route exact path={`${match.path}`} component={CollectionPreview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    </div>
)


export default ShopPage;