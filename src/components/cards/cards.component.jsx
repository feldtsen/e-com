import {useState, useEffect} from 'react';
import './cards.styles.scss'

import Card from '../card/card.component';

const Cards = ({ items, nrToRenderDesktop, nrToRenderMobile }) => {
    const [rowCount, setRowCount] = useState();

    useEffect(()=> {
        setRowCount(window.innerWidth < 1200 ? nrToRenderMobile : nrToRenderDesktop);
        const resizeHandler = () => {
            setRowCount(window.innerWidth < 1200 ? nrToRenderMobile : nrToRenderDesktop);
        }
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [nrToRenderDesktop, nrToRenderMobile])


    return (
        <div className="cards">
            <div className="cards__left-container">
                {
                    items ?
                        <Card item={items[0]} />
                        :
                        ''
                }
            </div>
            <div className="cards__right-container">
                {
                    items ?
                    items.filter((item, index) => (
                            index < rowCount && index !== 0
                        ))
                        .map((item, index) => (
                                <Card key={item.id} item={item}/>
                        ))
                    :
                    ''
                }
            </div>

        </div>
    )
}

export default Cards;