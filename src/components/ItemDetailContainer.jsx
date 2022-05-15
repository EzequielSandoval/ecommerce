import React, { useEffect, useState } from 'react'
import { items } from '../data/data';
import { ItemDetail } from './ItemDetail';

const getDetailProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(items)
    }, 2000);

})

export const ItemDetailContainer = ({ id }) => {

    const [items, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDetailProducts
            .then(resp => setDetail(resp))
            .finally(() => setLoading(false))
    })

    // mediante esta funcion se hace coincidir la id del array con la id (1)
    function findProductById(productId) {
        return productId.id === id
    }
    // se obtienen los detalles del producto utilizando el metodo find ()
    let detailProductById = items.find(productId => findProductById(productId))

    console.log(detailProductById)

    return (
        <div>{
            loading
                ?
                <h2>Cargando detalle...</h2>
                :
                <ItemDetail detailProduct={detailProductById} />
        }
        </div>
    )
}
