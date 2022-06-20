import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { CartTotal } from './CartTotal'
import { CartDetail } from './CartDetail'

export const Cart = () => {
    const { vaciarCarrito, cantTotal, precioTotal } = useCartContext()

    return (
        <div className='cart-bg'>
            {
                cantTotal() === 0
                    ?
                    <div className='cartVacio d-flex justify-content-center flex-column m-5 align-items-center'>
                        <h3 className='text-center m-2'>No tienes ningun articulo en tu carrito en tu carrito</h3>
                        <div className='d-flex '>
                            <div className="spinner-grow text-dark m-2 p-3" role="status"></div>
                            <div className="spinner-grow text-dark m-2 p-3" role="status"></div>
                            <div className="spinner-grow text-dark m-2 p-3" role="status"></div></div>
                        <Link to='/'>
                            <button className='btn btn-outline-dark m-5'>Volver al inicio</button>
                        </Link>
                    </div>
                    :
                    <div>
                        <CartDetail />
                        <CartTotal cantTotal={cantTotal} precioTotal={precioTotal} vaciarCarrito={vaciarCarrito} />
                    </div>
            }
        </div>
    )
}
