import React from 'react'

export const ItemDetail = ({ detailProduct }) => {



    return (
        <div>
            <div className='detailItemContainer'>
                <div className='imgContainer'>

                    <div className='listImg'>
                        <img className='imgDetail1' src={detailProduct.img1} alt="" />
                        <img className='imgDetail2' src={detailProduct.img2} alt="" />
                        <img className='imgDetail3' src={detailProduct.img3} alt="" />
                        <img className='imgDetail4' src={detailProduct.img4} alt="" />
                        <img className='imgDetail5' src={detailProduct.img5} alt="" />
                    </div>
                    <div className='displayImg'>
                        <img src={detailProduct.img1} alt="" />
                    </div>
                </div>
                <div className='containerDescription'>
                    <h2>{detailProduct.name}</h2>
                    <span className='infoId'>Codigo: nike hombre N° id: {detailProduct.id}</span>
                    <p>${detailProduct.price}</p>
                    <div className='talle'>
                        <span>Selecciona tu talle:</span>
                        <div className='talleBotones'>
                            <button className='btn btn-sm btn-outline-dark' disabled>39</button>
                            <button className='btn btn-sm btn-outline-dark'>40</button>
                            <button className='btn btn-sm btn-outline-dark'>41</button>
                            <button className='btn btn-sm btn-outline-dark' disabled>43</button>
                            <button className='btn btn-sm btn-outline-dark'>43.5</button>
                        </div>

                    </div>
                    <div className='detalles'>
                        <div className='envio'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg> Envio <span>gratis</span>
                        </div>
                        <div className='cuotas'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg> 3 , 6 y 12 <span>Sin interes</span>
                        </div>
                    </div>
                    <button className='btn btn-outline-dark btn-compra'> Procesar Compra </button>
                </div>

            </div>





        </div>
    )

}
