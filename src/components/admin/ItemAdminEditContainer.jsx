import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { ItemAdminEdit } from './ItemAdminEdit'

export const ItemAdminEditContainer = () => {
    const [items, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'items', id)
        getDoc(dbQuery)
            .then(resp => setDetail({ id: resp.id, ...resp.data() }))
            .finally(() => setLoading(false))

    }, [id])
    console.log(items)
    return (
        <div>{
            loading
                ?
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='text-light m-4'>CARGANDO DETALLE...</h2>
                    <div className=" spinner-border text-light " style={{ width: "3rem", height: "3rem", }} role="status">
                    </div>
                </div>
                :
                
                <ItemAdminEdit detailProduct={items} />

        }


        </div>
    )
}
