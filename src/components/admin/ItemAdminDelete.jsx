import React from 'react'
import { useEffect, useState } from 'react'
import { AdminSidebar } from './AdminSidebar'
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import { Item } from '../Item'

export const ItemAdminDelete = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [Random, setRandom] = useState()
  const [loading2, setLoading2] = useState(true)
  
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryCollectionFilter = query(queryCollection, where('categoria', '==', 'eliminado'))
    getDocs(queryCollectionFilter)
      .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [Random])
  console.log(Random)

  function applyUpdate(ItemId, old) {
    setLoading2(false)
    const db = getFirestore()
    const orderDoc = doc(db, 'items', ItemId)
    updateDoc(orderDoc, { categoria: old })
    console.log("applyUpdate: " + ItemId)
    setTimeout(() => {
      setRandom(Math.random())
      setLoading2(true)
    }, 1300);
  }

  return (
    <div>

      <div className='adminContainer'>
        <AdminSidebar />
        <div className='w-100 row row-cols-5 container mx-auto justify-content-center'>
          {loading
            ?
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className=" spinner-border  m-5" style={{ width: "3rem", height: "3rem", }} role="status">
              </div>
            </div>
            :
            items.map(item =>
              <div className='col ' key={item.id} >
                <Item
                  nameItem={item.name}
                  stockItem={item.stock}
                  imgItem={item.img1}
                  priceItem={item.price}
                  boton={
                    <div className='footerItem'>
                      <div className='buttonsAdminList'>
                        {
                          loading2 === false
                            ?
                            <div className="spinner-grow spinner-grow-sm text-danger" role="status">
                            </div>
                            :
                            <button className='btn btn-sm btn-outline-success m-1' onClick={() => { applyUpdate(item.id, item.oldCategory) }}>Restaurar</button>
                        }
                      </div>

                    </div>
                  }
                />
              </div>
            )
          }
        </div>
      </div>

    </div >
  )
}
