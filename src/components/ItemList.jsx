import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount';
import { items } from '../data/data.js'

const productos = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(items)
    }, 2000); // 2000 

})

export const ItemList = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true) // true

    useEffect(() => {
        productos
            .then(resp => setItems(resp))
            .finally(() => setLoading(false)) // false
    }, [])




    return (
        <div className='itemsGeneralContainer'>

            {loading
                ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        
                    </div>
                </div>
                :
                items.map(item => <ItemCount key={item.id} nameItem={item.name} stockItem={item.stock} imgItem= {item.img} priceItem={item.price}/>)
            }

        </div>


    )
}
