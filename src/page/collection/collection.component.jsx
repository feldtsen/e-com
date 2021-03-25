import {useState, useEffect} from 'react';
import CollectionPreview from "../../components/collection-preview/collection-preview.compononent";
import './collection.styles.scss';

const Collection = () => {
    const [data, setData] = useState([{title: 'none'}]);


   const getCollection = () => {
       const jsonData = require('../../data/collection.data.json');
       setData(jsonData);
   }

   useEffect(()=>{
       getCollection();
   }, [])

    return (
        <div className="collection">
            <div className="collection__all-categories">
                {
                    data.map(({title})=>(
                        <div className="collection__all-categories--category">{title}</div>
                    ))
                }
            </div>
            <div className="collection__container">
                <CollectionPreview data={data} />
            </div>
        </div>
    )
}

export default Collection;