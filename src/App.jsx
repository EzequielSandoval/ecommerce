import React from 'react'
import NavBar from './components/NavBar.jsx'
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemCount } from './components/ItemCount.jsx'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Productos destacados' />
      {/* <ItemCount /> */}
    </>
  )
}

export default App
