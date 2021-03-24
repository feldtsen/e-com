import {useState, useEffect} from 'react';

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
        <div>
            {data.map(category => (
                <div key={category.title}>
                    {category.title}
                </div>
            ))}
        </div>
    )
}

export default Collection;