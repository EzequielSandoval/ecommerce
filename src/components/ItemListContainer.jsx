import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'


export default function ItemListContainer({ subTitle }) {

  const { id } = useParams()

  let tipoCalzado = ''
  if ((id === 'running') || (id === 'futbol') || (id === 'training') || (id === 'basquet')) {
    tipoCalzado = 'calzado ideal para ' + id
  } else {
    tipoCalzado
  }

  return (
    <div>
      <div className='homeBanner'>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div id="customSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../src/img/img-home/banner1.jpg" alt="First slide" />
                <div className="carousel-caption caption-1 d-none d-md-block ">
                  <h5>DESCUBRÍ TU VELOCIDAD</h5>
                  <p>Coleccion Hakone Ekiden</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../src/img/img-home/banner2.jpg" alt="Second slide" />
                <div className="carousel-caption caption-2 d-none d-md-block ">
                  <h5>NIKE RUN CLUB</h5>
                  <p>LA MOTIVACION QUE NECESITAS PARA CORRER MÁS Y MEJOR.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../src/img/img-home/banner3.jpg" alt="Third slide" />
                <div className="carousel-caption caption-3 d-none d-md-block ">
                  <h5>NIKE PHANTOM GT ACADEMY</h5>
                  <p>TEXTURA GRUESA Y DENSA PARA BRINDARTE UN MEJOR TOQUE EN PASES, REGATES Y TIROS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='subTitle'>
          <h2>{subTitle}</h2>
          <h2>{tipoCalzado}</h2>
        </div>
      </div>
      <ItemList />
    </div>
  )
}
