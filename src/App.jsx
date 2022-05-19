import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx'
import { Cart } from './components/Cart.jsx'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<ItemListContainer subTitle='Productos destacados' />} />
        <Route path='/categoria/:id' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailContainer />} />
        <Route path='/cart/:id/:cantidad' element={<Cart />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
