import React from 'react'
import { ItemList } from './ItemList'





export default function ItemListContainer({ greeting }) {



  return (
    <div>
      <div className='homeBanner'> 
        <img src="" alt="" />
        <h2>{greeting}</h2>
      </div>
      <ItemList />


    </div>
  )
}
