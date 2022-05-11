import React, { useEffect, useState } from 'react'
import { items } from '../data/data.js'
import { Item } from './Item';

const productos = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(items)
    }, 2000);

})

export const ItemList = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        productos
            .then(resp => setItems(resp))
            .finally(() => setLoading(false))
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
                items.map(item =>
                    <Item
                        key={item.id}
                        nameItem={item.name}
                        stockItem={item.stock}
                        imgItem={item.img}
                        priceItem={item.price} />)
            }
        </div>
    )
}
