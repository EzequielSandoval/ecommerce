
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import '../css/styles.css'
export const ItemCount = ({ objProducto }) => {

    const initial = 1
    const [count, setCount] = useState(initial)

    function contador(num) {
        setCount(count + num)
        setInputType('button')

    }

    console.log(count)

    let palabra = ''

    const { addToCart, cartList } = useCartContext()

    function onAdd() {
        addToCart({ ...objProducto, cantidad: count })
        console.log(count)
    }

    console.log(cartList)

    /*-----INTERCAMBIABILIDAD DE BOTONES----*/
    const [InputType, setInputType] = useState('button')

    const inter = () => {
        setInputType('input')
    }
    /*-----FIN INTERCAMBIABILIDAD DE BOTONES----*/

    return (

        <div >
            <div className='count'>
                <div className='buttonContainer'>
                    <button className='buttonItem ' onClick={() => contador(-1)} disabled={count == initial ? true : null}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                    <span className='countItemNumber'>{count}</span>
                    <button className='buttonItem ' onClick={() => contador(+1)} disabled={count == objProducto.stock ? true : null}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <span className='stockDisp'>("{objProducto.stock}" {objProducto.stock == 1 ? palabra = 'disponible' : palabra = 'disponibles'})</span>
                </div>
            </div> 


            <div >

                {

                    InputType === 'button'
                        ?
                        <div className='btn-agregar'>
                            <button className='mx-auto btn btn-outline-dark btn-compra' onClick={() => { onAdd(); inter(); }} > Agregar al carrito </button>
                        </div>
                        :
                        <Link to={'/cart'}>
                            <div className='btn-finalizar'>
                                <button className='btn btn-outline-success btn-compra btn-fin' onClick={contador} > Finalizar compra </button>
                            </div>
                        </Link>

                }

            </div>

        </div >

    )
}




