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
    }, [])


    return (
        <div className="cards">
            {
                items ?
                    items
                        .filter((item, index) => (
                            index < rowCount
                        ))
                        .map(({id, ...otherProps}) => (
                            <Card key={id} {...otherProps} rowCount={rowCount}/>
                        ))
                    :
                    ''
            }
        </div>
    )
}

export default Cards;