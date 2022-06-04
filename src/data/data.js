
import { addDoc, collection, getFirestore } from 'firebase/firestore'
export const items = [

  {

    name: 'Nike Winflo 8',
    categoria: 'running',
    price: 23900,
    stock: 3,
    img1: '../src/img/productos/running/winflo-8/winflo-8.png',
    img2: '../src/img/productos/running/winflo-8/winflo-8-img2.png',
    img3: '../src/img/productos/running/winflo-8/winflo-8-img3.png',
    img4: '../src/img/productos/running/winflo-8/winflo-8-img4.png',
    img5: '../src/img/productos/running/winflo-8/winflo-8-img5.png'
  },

  {

    name: 'Nike Revolution 5',
    categoria: 'running',
    price: 15999,
    stock: 2,
    img1: '../src/img/productos/running/revolution-5/revolution-5.png',
    img2: '../src/img/productos/running/revolution-5/revolution-5-img2.png',
    img3: '../src/img/productos/running/revolution-5/revolution-5-img3.png',
    img4: '../src/img/productos/running/revolution-5/revolution-5-img4.png',
    img5: '../src/img/productos/running/revolution-5/revolution-5-img5.png'
  },

  {

    name: 'Nike React Infinity Run 2',
    categoria: 'running',
    price: 33999,
    stock: 3,
    img1: '../src/img/productos/running/react-infinity-run-flyknit-2/react-infinity-run-flyknit-2.png',
    img2: '../src/img/productos/running/react-infinity-run-flyknit-2/react-infinity-run-flyknit-2-img2.png',
    img3: '../src/img/productos/running/react-infinity-run-flyknit-2/react-infinity-run-flyknit-2-img3.png',
    img4: '../src/img/productos/running/react-infinity-run-flyknit-2/react-infinity-run-flyknit-2-img4.png',
    img5: '../src/img/productos/running/react-infinity-run-flyknit-2/react-infinity-run-flyknit-2-img5.png'
  },

  {

    name: 'Nike Downshifter 11',
    categoria: 'running',
    price: 15499,
    stock: 1,
    img1: '../src/img/productos/running/downshifter-11/downshifter-11.png',
    img2: '../src/img/productos/running/downshifter-11/downshifter-11-img2.png',
    img3: '../src/img/productos/running/downshifter-11/downshifter-11-img3.png',
    img4: '../src/img/productos/running/downshifter-11/downshifter-11-img4.png',
    img5: '../src/img/productos/running/downshifter-11/downshifter-11-img5.png'
  },


  {

    name: 'Nike Air Zoom Vomero 15',
    categoria: 'running',
    price: 33999,
    stock: 4,
    img1: '../src/img/productos/running/air-zoom-vomero-15/air-zoom-vomero-15.png',
    img2: '../src/img/productos/running/air-zoom-vomero-15/air-zoom-vomero-15-img2.png',
    img3: '../src/img/productos/running/air-zoom-vomero-15/air-zoom-vomero-15-img3.png',
    img4: '../src/img/productos/running/air-zoom-vomero-15/air-zoom-vomero-15-img4.png',
    img5: '../src/img/productos/running/air-zoom-vomero-15/air-zoom-vomero-15-img5.png'
  },
  /* ---------FUTBOL---------*/

  {
    name: 'Nike Legend 9 TF',
    categoria: 'futbol',
    price: 11999,
    stock: 3,
    img1: '../src/img/productos/futbol/Nike-Legend-9-TF/Nike-Legend-9-TF.png',
    img2: '../src/img/productos/futbol/Nike-Legend-9-TF/Nike-Legend-9-TF-img2.png',
    img3: '../src/img/productos/futbol/Nike-Legend-9-TF/Nike-Legend-9-TF-img3.png',
    img4: '../src/img/productos/futbol/Nike-Legend-9-TF/Nike-Legend-9-TF-img4.png',
    img5: '../src/img/productos/futbol/Nike-Legend-9-TF/Nike-Legend-9-TF-img5.png'
  },


  {

    name: 'Nike Vapor 13 Elite Fg',
    categoria: 'futbol',
    price: 60499,
    stock: 2,
    img1: '../src/img/productos/futbol/Nike-Vapor-13-Elite-Fg/Nike-Vapor-13-Elite-Fg.png',
    img2: '../src/img/productos/futbol/Nike-Vapor-13-Elite-Fg/Nike-Vapor-13-Elite-Fg-img2.png',
    img3: '../src/img/productos/futbol/Nike-Vapor-13-Elite-Fg/Nike-Vapor-13-Elite-Fg-img3.png',
    img4: '../src/img/productos/futbol/Nike-Vapor-13-Elite-Fg/Nike-Vapor-13-Elite-Fg-img4.png',
    img5: '../src/img/productos/futbol/Nike-Vapor-13-Elite-Fg/Nike-Vapor-13-Elite-Fg-img5.png'
  },


  {

    name: 'Nike Superfly 7 Academy TF',
    categoria: 'futbol',
    price: 20999,
    stock: 3,
    img1: '../src/img/productos/futbol/Nike-Superfly-7-Academy-TF/Nike-Superfly-7-Academy-TF.png',
    img2: '../src/img/productos/futbol/Nike-Superfly-7-Academy-TF/Nike-Superfly-7-Academy-TF-img2.png',
    img3: '../src/img/productos/futbol/Nike-Superfly-7-Academy-TF/Nike-Superfly-7-Academy-TF-img3.png',
    img4: '../src/img/productos/futbol/Nike-Superfly-7-Academy-TF/Nike-Superfly-7-Academy-TF-img4.png',
    img5: '../src/img/productos/futbol/Nike-Superfly-7-Academy-TF/Nike-Superfly-7-Academy-TF-img5.png'
  },


  {
    name: 'Nike Phantom Vision 2 Elite',
    categoria: 'futbol',
    price: 54999,
    stock: 4,
    img1: '../src/img/productos/futbol/Nike-Phantom-Vision-2-Elite/Nike-Phantom-Vision-2-Elite.png',
    img2: '../src/img/productos/futbol/Nike-Phantom-Vision-2-Elite/Nike-Phantom-Vision-2-Elite-img2.png',
    img3: '../src/img/productos/futbol/Nike-Phantom-Vision-2-Elite/Nike-Phantom-Vision-2-Elite-img3.png',
    img4: '../src/img/productos/futbol/Nike-Phantom-Vision-2-Elite/Nike-Phantom-Vision-2-Elite-img4.png',
    img5: '../src/img/productos/futbol/Nike-Phantom-Vision-2-Elite/Nike-Phantom-Vision-2-Elite-img5.png'
  },


  {

    name: 'Nike Legend 8 Club FG',
    categoria: 'futbol',
    price: 14999,
    stock: 4,
    img1: '../src/img/productos/futbol/Nike-Legend-8-Club-FG/Nike-Legend-8-Club-FG.png',
    img2: '../src/img/productos/futbol/Nike-Legend-8-Club-FG/Nike-Legend-8-Club-FG-img2.png',
    img3: '../src/img/productos/futbol/Nike-Legend-8-Club-FG/Nike-Legend-8-Club-FG-img3.png',
    img4: '../src/img/productos/futbol/Nike-Legend-8-Club-FG/Nike-Legend-8-Club-FG-img4.png',
    img5: '../src/img/productos/futbol/Nike-Legend-8-Club-FG/Nike-Legend-8-Club-FG-img5.png'
  },


  {

    name: 'Nike Legend Essential 2',
    categoria: 'training',
    price: 12999,
    stock: 2,
    img1: '../src/img/productos/training/Nike-Legend-Essential-2/Nike-Legend-Essential-2.png',
    img2: '../src/img/productos/training/Nike-Legend-Essential-2/Nike-Legend-Essential-2-img2.png',
    img3: '../src/img/productos/training/Nike-Legend-Essential-2/Nike-Legend-Essential-2-img3.png',
    img4: '../src/img/productos/training/Nike-Legend-Essential-2/Nike-Legend-Essential-2-img4.png',
    img5: '../src/img/productos/training/Nike-Legend-Essential-2/Nike-Legend-Essential-2-img5.png'
  },


  {

    name: 'Nike Air Zoom Pegasus 38',
    categoria: 'training',
    price: 26999,
    stock: 4,
    img1: '../src/img/productos/training/Nike-Air-Zoom-Pegasus-38/Nike-Air-Zoom-Pegasus-38.png',
    img2: '../src/img/productos/training/Nike-Air-Zoom-Pegasus-38/Nike-Air-Zoom-Pegasus-38-img2.png',
    img3: '../src/img/productos/training/Nike-Air-Zoom-Pegasus-38/Nike-Air-Zoom-Pegasus-38-img3.png',
    img4: '../src/img/productos/training/Nike-Air-Zoom-Pegasus-38/Nike-Air-Zoom-Pegasus-38-img4.png',
    img5: '../src/img/productos/training/Nike-Air-Zoom-Pegasus-38/Nike-Air-Zoom-Pegasus-38-img5.png'
  },


  {

    name: 'Nike Air Max Alpha Trainer 4',
    categoria: 'training',
    price: 18999,
    stock: 4,
    img1: '../src/img/productos/training/Nike-Air-Max-Alpha-Trainer-4/Nike-Air-Max-Alpha-Trainer-4.png',
    img2: '../src/img/productos/training/Nike-Air-Max-Alpha-Trainer-4/Nike-Air-Max-Alpha-Trainer-4-img2.png',
    img3: '../src/img/productos/training/Nike-Air-Max-Alpha-Trainer-4/Nike-Air-Max-Alpha-Trainer-4-img3.png',
    img4: '../src/img/productos/training/Nike-Air-Max-Alpha-Trainer-4/Nike-Air-Max-Alpha-Trainer-4-img4.png',
    img5: '../src/img/productos/training/Nike-Air-Max-Alpha-Trainer-4/Nike-Air-Max-Alpha-Trainer-4-img5.png'
  },


  {

    name: 'Nike Kyrie Flytrap IV',
    categoria: 'basquet',
    price: 25499,
    stock: 2,
    img1: '../src/img/productos/basquet/Nike-Kyrie-Flytrap-IV/Nike-Kyrie-Flytrap-IV.png',
    img2: '../src/img/productos/basquet/Nike-Kyrie-Flytrap-IV/Nike-Kyrie-Flytrap-IV-img2.png',
    img3: '../src/img/productos/basquet/Nike-Kyrie-Flytrap-IV/Nike-Kyrie-Flytrap-IV-img3.png',
    img4: '../src/img/productos/basquet/Nike-Kyrie-Flytrap-IV/Nike-Kyrie-Flytrap-IV-img4.png',
    img5: '../src/img/productos/basquet/Nike-Kyrie-Flytrap-IV/Nike-Kyrie-Flytrap-IV-img5.png'
  },


  {

    name: 'Nike KD Trey 5 VIII',
    categoria: 'basquet',
    price: 38499,
    stock: 1,
    img1: '../src/img/productos/basquet/Nike-KD-Trey-5-VIII/Nike-KD-Trey-5-VIII.png',
    img2: '../src/img/productos/basquet/Nike-KD-Trey-5-VIII/Nike-KD-Trey-5-VIII-img2.png',
    img3: '../src/img/productos/basquet/Nike-KD-Trey-5-VIII/Nike-KD-Trey-5-VIII-img3.png',
    img4: '../src/img/productos/basquet/Nike-KD-Trey-5-VIII/Nike-KD-Trey-5-VIII-img4.png',
    img5: '../src/img/productos/basquet/Nike-KD-Trey-5-VIII/Nike-KD-Trey-5-VIII-img5.png'
  }


]

export function ejecutarCarga() {


  items.forEach(function funcionCarga(items) {
    // console.log(detalle)
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    addDoc(queryCollection, { ...items })
    console.log (items)
  })


}


