import './collection-preview.styles.scss'
import Cards from "../cards/cards.component";

const CollectionPreview = ({ data }) => (
    data.map(({title, items}) => (
        <div key={title} className="collection-preview" >
            <h1 className="collection-preview--title">{`${title}`} <span className="collection-preview--title--chevron">></span></h1>

            <div className="collection-preview__container">
                <Cards items={items} nrToRenderMobile={3} nrToRenderDesktop={4}/>
            </div>
        </div>
    ))
)

export default CollectionPreview;