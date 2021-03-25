import './cards.styles.scss'

import Card from '../card/card.component';

const Cards = ({ items, nrToRenderDesktop, nrToRenderMobile }) => (
    <div className="cards">
        {
            items ?
                items
                    .filter((item, index) => (
                        window.innerWidth < 1200 ? index < nrToRenderMobile : index < nrToRenderDesktop)
                    )
                    .map(({id, ...otherProps}) => (
                        <Card key={id} {...otherProps}/>
                    ))
                :
                ''
        }
    </div>
)

export default Cards;