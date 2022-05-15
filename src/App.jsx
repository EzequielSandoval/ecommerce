import React from 'react'
import NavBar from './components/NavBar.jsx'
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Productos destacados' />
      <ItemDetailContainer id={2} />
    </>
  )
}

export default App
