import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


export const Cart = () => {
    const { cartList, vaciarCarrito, borrarItem, cantTotal, precioTotal } = useCartContext()
    return (
        <div className='cart-bg'>
            {
                cantTotal() === 0
                    ?
                    <div className='cartVacio d-flex justify-content-center flex-column m-5 align-items-center'>
                        <h3 className='text-center m-2'>No tienes ningun articulo en tu carrito en tu carrito</h3>
                        <div className='d-flex '>
                            <div class="spinner-grow text-dark m-2 p-3" role="status"></div>
                            <div class="spinner-grow text-dark m-2 p-3" role="status"></div>
                            <div class="spinner-grow text-dark m-2 p-3" role="status"></div></div>
                        <Link to='/'>
                            <button className='btn btn-outline-dark m-5'>Volver al inicio</button>
                        </Link>
                    </div>
                    :
                    <div>
                        <h2 className='p-2'>Mi Compra</h2>
                        <div className='cartContenedor'>
                            <div className='titleCartContainer'>
                                <span className='titles'>Producto</span>
                                <span className='titles'>Precio</span>
                                <span className='titles'>Cantidad</span>
                            </div>
                            <div>
                                {cartList.map(product =>

                                    <div className='detailItems' key={product.id}>

                                        <div className='cartDetailContainer'>
                                            <img className='imgCartItem' src={product.img1} alt="" />

                                            <div className='detailCart'>
                                                <span className='nameProduct'>{product.name}</span>
                                            </div>
                                        </div>
                                        <div className='priceCart'>
                                            <span>$ {product.price}</span>
                                        </div>
                                        <div className='cantCart'>
                                            <span>{product.cantidad}</span>
                                        </div>
                                        <div className='buttonDeleteCart'>
                                            <button className='btn btn-outline-danger btn-sm' onClick={() => { borrarItem(product.id) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        <div className='totalContainer'>
                            <div className='totalDetail'>
                                <div className='totales'>
                                    <span>Cantidad de productos: {cantTotal() !== 0 && cantTotal()}</span>
                                    <span>TOTAL: ${precioTotal() !== 0 && precioTotal()}</span>
                                </div>
                                <div className='totalButtons'>
                                    <button className='btn btn-outline-danger btn-sm w-50 m-2' onClick={vaciarCarrito} >vaciar carrito</button>
                                    <button className='btn btn-dark w-75 m-2'>Finalizar Compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
