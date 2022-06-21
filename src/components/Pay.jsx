import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { CartDetail } from './CartDetail'

export const Pay = () => {
    const [buyer, setbuyer] = useState({})
    const [Random, setRandom] = useState()
    const [loading2, setLoading2] = useState(true)
    const [PayBtn, setPayBtn] = useState([]);
    const item = JSON.parse(localStorage.getItem('orden'))
    useEffect(() => {
        setbuyer(item.buyer)
    }, [])
    function procesar() {
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, item)
        setTimeout(() => {
            setRandom(Math.random())
            setLoading2(false)
        }, 1300);
    }


    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer TEST-2150886808287404-061715-5fe3d0663af7678ceae0c86ec3c48e4e-272910332"
        },
        body: JSON.stringify({
            items: [
                {
                    title: 'Productos SportNike',
                    description: 'undefined',
                    picture_url:
                        "",
                    category_id: "art",
                    quantity: 1,
                    currency_id: "ARS",
                    unit_price: item.total
                }
            ]
        })
    };

    useEffect(() => {
        fetch("https://api.mercadopago.com/checkout/preferences", data)
            .then(function (resp) {
                return resp.json();
            })
            .then((resp) => setPayBtn(resp));
    }, [Random]);

   

    return (
        <div>
            <div className='cart-bg'>
                <h2>
                    RESUMEN DE LA COMPRA:
                </h2>
                <div className='infoBuyer'>
                    <h3>Datos del comprador:</h3>
                    <div className='row gx-3 justify-content-center'>
                        <div className='col-md-6'>
                            <div>
                                <h6>Nombres :</h6>
                                <p>{buyer.name} {buyer.lastname}</p>
                            </div>
                            <div>
                                <h6>Email :</h6>
                                <p>{buyer.email}</p>
                            </div>
                            <div>
                                <h6>Telefono :</h6>
                                <p>{buyer.phone}</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <h6>Direccion :</h6>
                                <p>{buyer.address}</p>
                            </div>
                            <div>
                                <h6>Provincia :</h6>
                                <p>{buyer.state}</p>
                            </div>
                            <div>
                                <h6>CP :</h6>
                                <p>{buyer.zip}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CartDetail />
                <div>
                    <h4>TOTAL: ${item.total}</h4>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={procesar} />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Confirmo que todos los datos son correctos
                    </label>
                </div>
                {
                    loading2 === true
                        ?
                        <div>

                        </div>
                        :
                        <a href={PayBtn.init_point}>
                            <button className='btn btn-sm btn-success m-1' disabled={loading2 === true}>PAGAR</button>
                        </a>
                }
            </div>
        </div>
    )
}
