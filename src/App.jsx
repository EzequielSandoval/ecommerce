import React from 'react'
import NavBar from './components/NavBar.jsx'
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = 'Hola!, soy ItemLisContainer'/>
    </>
  )
}

export default App
