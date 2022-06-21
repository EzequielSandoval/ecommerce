import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        const index = cartList.findIndex(prod => prod.id === item.id)

        if (index !== -1) {
            const old = cartList[index].cantidad
            const newCart = cartList.filter(prod => prod.id !== item.id)
            item.cantidad += old
            setCartList([...newCart, item])
        } else {

            setCartList([
                ...cartList,
                item
            ])
        }
    }

    const deleteCart = () => {
        setCartList([])
    }

    const borrarItem = (id) => {
        const filterId = cartList.filter(objbId => objbId.id !== id)
        setCartList(filterId)
        console.log(filterId)
    }


    const qtyTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.cantidad, 0)
    }
    const priceTotal = () => {
        return cartList.reduce((contador, prod) => contador += (prod.cantidad * prod.price), 0)

    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteCart,
            borrarItem,
            qtyTotal,
            priceTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider