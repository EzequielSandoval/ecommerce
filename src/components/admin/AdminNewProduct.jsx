import React, { useState } from 'react'
import { AdminSidebar } from './AdminSidebar'
import { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject } from 'firebase/storage'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
export const AdminNewProduct = () => {

    const changeImagen = e => {   // Esta funcion recibe el evento que se activa cuando se sube un archivo
        const file = e.target.files[0] // aqui se obtiene el archivo que se subio mediante el input (file tiene los valores de: name, size, type, fecha, etc)
        const storage = getStorage() // se crea la referencia root, se hace el llamado al storage de firebase
        const storageRef = ref(storage, `img/productos/${InfoValues.categoria}/${InfoValues.nombre}/${file.name}`) // se crea la REFERENCIA para el archivo que subamos 
        const uploadTask = uploadBytesResumable(storageRef, file) // se crea la tarea para llamar al storageRef para subir el archivo al storage
        const { target } = e

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Progreso " + progress)
        }, (error) => {
            console.log(error)
        },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("DONWLOAD URL: " + downloadURL)
                    switch (target.name) {
                        case 'img1':
                            setImage(previusState => {
                                return { ...previusState, image1: downloadURL }
                            })
                            break;
                        case 'img2':
                            setImage(previusState => {
                                return { ...previusState, image2: downloadURL }
                            })
                            break;
                        case 'img3':
                            setImage(previusState => {
                                return { ...previusState, image3: downloadURL }
                            })
                            break;
                        case 'img4':
                            setImage(previusState => {
                                return { ...previusState, image4: downloadURL }
                            })
                            break;
                        case 'img5':
                            setImage(previusState => {
                                return { ...previusState, image5: downloadURL }
                            })
                            break;
                        default:
                            break;
                    }
                })
            })
    }

    const imgUnset = "https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2FunsetImage.png?alt=media&token=2b21f922-39b8-4360-991a-11eca92a3323"
    const [Image, setImage] = useState(
        {
            image1: imgUnset,
            image2: imgUnset,
            image3: imgUnset,
            image4: imgUnset,
            image5: imgUnset

        })

    const [InfoValues, setInfoValues] = useState({
        nombre: '',
        categoria: '',
        precio: 0,
        stock: 0

    })
    function handleChange(e) {
        const { target } = e
        const { name, value } = target
        const newValues = {
            ...InfoValues,
            [name]: value
        }
        setInfoValues(newValues)
    }
    function cargarNuevoItem() {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        addDoc(queryCollection, {
            name: InfoValues.nombre,
            categoria: InfoValues.categoria,
            deleted: false,
            price: Number(InfoValues.precio),
            stock: Number(InfoValues.stock),
            img1: Image.image1,
            img2: Image.image2,
            img3: Image.image3,
            img4: Image.image4,
            img5: Image.image5
        })
        setTimeout(() => {
            window.location.href = './admin'
            console.log ("se subio correctamente")
        }, 1000);
    }

    /*-----------------Eliminar una imagen cargada----------------------*/
    function deleteImg(reference) {
        const storage = getStorage();
        switch (reference) {
            case Image.image1:
                setImage(previusState => {
                    return { ...previusState, image1: imgUnset }
                })
                break;
            case Image.image2:
                setImage(previusState => {
                    return { ...previusState, image2: imgUnset }
                })
                break;
            case Image.image3:
                setImage(previusState => {
                    return { ...previusState, image3: imgUnset }
                })
                break;
            case Image.image4:
                setImage(previusState => {
                    return { ...previusState, image4: imgUnset }
                })
                break;
            case Image.image5:
                setImage(previusState => {
                    return { ...previusState, image5: imgUnset }
                })
                break;
            default:
                break;
        }

        const desertRef = ref(storage, reference)

        deleteObject(desertRef).then(() => {
            console.log("borrado con exito")

        }).catch((error) => {
            console.log("error inesperado:" + error)
        })

      
    }


    function IsDisabled() {
        if (((InfoValues.nombre) === '') || ((InfoValues.categoria) === '') || ((InfoValues.precio) === 0) || ((InfoValues.stock) === 0)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <div className='adminContainer'>
                <AdminSidebar />
                <div className='detailItemContainer admin'>
                    <div className='imgContainer'>
                        <div className='listImg'>
                            <input type="file" id='inputImg1' onChange={changeImagen} name="img1" disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg1">
                                    <img src={Image.image1} alt="" />
                                </label>
                                {
                                    Image.image1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => deleteImg(Image.image1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg2' onChange={changeImagen} name="img2" disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg2" >
                                    <img src={Image.image2} alt="" />
                                </label>
                                {
                                    Image.image2 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn btn-danger btn-sm btn-deleteImg ' onClick={() => deleteImg(Image.image2)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg3' onChange={changeImagen} name="img3" disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg3">
                                    <img src={Image.image3} alt="" />
                                </label>
                                {
                                    Image.image3 != imgUnset
                                        ?

                                        <div className="btn-deleteContainer">
                                            <button className='btn btn-danger btn-sm btn-deleteImg' onClick={() => deleteImg(Image.image3)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg4' onChange={changeImagen} name="img4" disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg4">
                                    <img src={Image.image4} alt="" />
                                </label>
                                {
                                    Image.image4 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn btn-danger btn-sm btn-deleteImg ' onClick={() => deleteImg(Image.image4)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg5' onChange={changeImagen} name="img5" disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg5">
                                    <img src={Image.image5} alt="" />
                                </label>
                                {
                                    Image.image5 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn btn-danger btn-sm btn-deleteImg ' onClick={() => deleteImg(Image.image5)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                        </div>
                        <div className='displayImg'>
                            <img src={Image.image1} alt="" />
                        </div>
                    </div>
                    <div className='containerDescription'>
                        <h2><input type="text" name="nombre" id="" placeholder='Nombre del producto' onChange={handleChange} /></h2>
                        <p>$<input type="text" name="precio" id="" placeholder='00000' onChange={handleChange} /></p>
                        <div className='category-stock'>
                            <span>categoria</span>
                            <select type="text" name="categoria" onChange={handleChange}>
                                <option value="">Seleccionar...</option>
                                <option>running</option>
                                <option>futbol</option>
                                <option>training</option>
                                <option>basquet</option>
                            </select>
                            <span>stock</span>
                            <input type="text" name="stock" placeholder='000' onChange={handleChange} />
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
                            <div className='mt-5 m-auto'>
                                <button className='btn btn-success ' onClick={cargarNuevoItem} disabled={IsDisabled()}>Subir un nuevo producto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
