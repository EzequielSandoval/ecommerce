import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx'
import { Cart } from './components/Cart.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Purchase } from './components/Purchase.jsx'


import { Admin } from './components/admin/Admin.jsx'
import { ItemAdminEditContainer } from './components/admin/ItemAdminEditContainer.jsx'
import { AdminNewProduct } from './components/admin/AdminNewProduct.jsx'
import { Footer } from './components/Footer.jsx'
import { ItemAdminDelete } from './components/admin/ItemAdminDelete.jsx'
import { Pay } from './components/Pay.jsx'

// import { CartContextProvider } from './context/CartContext.jsx'
// 


function App() {

  return (
    <BrowserRouter>

      <CartContextProvider>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer subTitle='Productos destacados' />} />
          <Route path='/categoria/:id' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
          <Route path='/admin/edit/:id' element={<ItemAdminEditContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/nuevo' element={<AdminNewProduct />} />
          <Route path='/admin/papelera/:id' element={<ItemAdminDelete />} />
          <Route path='/purchase/pay' element={<Pay />} />
        </Routes>
      </CartContextProvider>


    </BrowserRouter>
  )

}

export default App
