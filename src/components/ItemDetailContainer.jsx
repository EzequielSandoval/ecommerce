import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../data/data';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

    const [items, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    console.log(id)
    
    useEffect(() => {
        productos
            .then(resp => setDetail(resp))
            .finally(() => setLoading(false)) // false
    })

    // mediante esta funcion se hace coincidir la id del array con la id (useParams)
    function findProductById(productId) {
        return productId.id === Number(id)
    }
    // se obtienen los detalles del producto utilizando el metodo find ()
    let detailProductById = items.find(productId => findProductById(productId))

    console.log(detailProductById)

    return (
        <div>{
            loading
                ?
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='text-light m-4'>CARGANDO DETALLE...</h2>
                    <div className=" spinner-border text-light " style={{ width: "3rem", height: "3rem", }} role="status">
                    </div>
                </div>
                :
                <ItemDetail detailProduct={detailProductById} />
        }
        </div>
    )
}
