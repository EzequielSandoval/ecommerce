import React from 'react'
import { Link } from 'react-router-dom'

export const CartTotal = ({ cantTotal, precioTotal, vaciarCarrito }) => {

    return (
        <div>
            <div className='totalContainer'>
                <div className='totalDetail'>
                    <div className='totales'>
                        <span>Cantidad de productos: {cantTotal() !== 0 && cantTotal()}</span>
                        <span>TOTAL: ${precioTotal() !== 0 && precioTotal()}</span>
                    </div>
                    <div className='totalButtons'>
                        <button className='btn btn-outline-danger btn-sm w-50 m-2' onClick={vaciarCarrito} >vaciar carrito</button>
                        <Link to={`/purchase`}>
                            <button className='btn btn-dark w-80 m-2'>Finalizar Compra</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
