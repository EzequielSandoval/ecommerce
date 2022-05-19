import React from 'react'
import { useParams } from 'react-router-dom'

export const Cart = () => {
    const { cantidad } = useParams()
    return (
        <div>
            <h2 className='text-light'>CART CANTIDAD {cantidad}</h2>
        </div>
    )
}
