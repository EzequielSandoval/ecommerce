import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import { Item } from '../Item';


export const ItemAdminList = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [Random, setRandom] = useState()
    const [loading2, setLoading2] = useState(true)
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')

        const queryCollectionFilter = query(queryCollection, where('categoria', 'in', ['running', 'futbol', 'training', 'basquet']))
        getDocs(queryCollectionFilter)
            .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    
    }, [Random])
  
   

    function applyUpdate(ItemId, itemCategory) {
        setLoading2(false)
        const db = getFirestore()
        const orderDoc = doc(db, 'items', ItemId)
        updateDoc(orderDoc, {
            categoria: "eliminado",
            oldCategory: itemCategory
        })
        setTimeout(() => {
            setRandom(Math.random())
            setLoading2(true)
        }, 1300);

    }

    return (
        <div>
            <div className='itemsGeneralContainer row row-cols-5 container mx-auto justify-content-center'>

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
                                        {
                                            loading2 === false
                                                ?
                                                <div className="spinner-grow spinner-grow-sm text-danger" role="status">
                                                </div>
                                                :
                                                <div className='buttonsAdminList'>
                                                    <Link to={`/admin/edit/${item.id}`}>
                                                        <button className='btn btn-sm btn-outline-warning m-1'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                            </svg>
                                                        </button>
                                                    </Link>
                                                    <button className='btn btn-sm btn-outline-danger m-1' onClick={() => { applyUpdate(item.id, item.categoria) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                        }

                                    </div>
                                }
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
