import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { Footer } from './Footer'

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
                <img src={"https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2Fbanner1.jpg?alt=media&token=8643fa76-cdca-47f3-a4df-74fd71a4ffe0"} alt="First slide" />
                <div className="carousel-caption caption-1 d-none d-md-block ">
                  <h5>DESCUBRÍ TU VELOCIDAD</h5>
                  <p>Coleccion Hakone Ekiden</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={"https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2Fbanner2.jpg?alt=media&token=d7cd553e-be63-4695-a33c-a465074f5c72"} alt="Second slide" />
                <div className="carousel-caption caption-2 d-none d-md-block ">
                  <h5>NIKE RUN CLUB</h5>
                  <p>LA MOTIVACION QUE NECESITAS PARA CORRER MÁS Y MEJOR.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={"https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2Fbanner3.jpg?alt=media&token=3106fdd4-0d06-4a42-9dcf-0dd86b6e2335"} alt="Third slide" />
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
      <Footer />
    </div>
  )
}
