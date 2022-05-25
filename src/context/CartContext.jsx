import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    function addToCart(item) {


        const index = cartList.findIndex(prod => prod.id === item.id)
        if (index !== -1) {
            const old = cartList[index].cantidad
            // otra opcion
            cartList[index].cantidad += old
            setCartList([...cartList])
        } else {

            setCartList([
                ...cartList,
                item
            ])
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const borrarItem = (id) => {
        const filterId = cartList.filter(objbId => objbId.id !== id)
        setCartList(filterId)
        console.log(filterId)
    }


    const cantTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.cantidad, 0)
    }
    const precioTotal = () => {
        return cartList.reduce((contador, prod) => contador += (prod.cantidad * prod.price), 0)

    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            borrarItem,
            cantTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider