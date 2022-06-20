import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import { getStorage, ref, deleteObject, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import { AdminSidebar } from './AdminSidebar'


export const ItemAdminEdit = ({ detailProduct }) => {
    const imgUnset = "https://firebasestorage.googleapis.com/v0/b/sportnike-eb926.appspot.com/o/image%2FunsetImage.png?alt=media&token=2b21f922-39b8-4360-991a-11eca92a3323"
    const [UpdateImg, setUpdateImg] = useState(
        {
            updateImg1: detailProduct.img1,
            updateImg2: detailProduct.img2,
            updateImg3: detailProduct.img3,
            updateImg4: detailProduct.img4,
            updateImg5: detailProduct.img5
        }
    )
    const [InfoValues, setInfoValues] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        stock: ''
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

    function editFunction(reference) {
        const storage = getStorage();
        switch (reference) {
            case UpdateImg.updateImg1:
                setUpdateImg(previusState => {
                    return { ...previusState, updateImg1: imgUnset }
                })
                break;
            case UpdateImg.updateImg2:
                setUpdateImg(previusState => {
                    return { ...previusState, updateImg2: imgUnset }
                })
                break;
            case UpdateImg.updateImg3:
                setUpdateImg(previusState => {
                    return { ...previusState, updateImg3: imgUnset }
                })
                break;
            case UpdateImg.updateImg4:
                setUpdateImg(previusState => {
                    return { ...previusState, updateImg4: imgUnset }
                })
                break;
            case UpdateImg.updateImg5:
                setUpdateImg(previusState => {
                    return { ...previusState, updateImg5: imgUnset }
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


    const changeImage = e => {
        const file = e.target.files[0]
        const storage = getStorage()
        const storageRef = ref(storage, `img/productos/${InfoValues.categoria}/${InfoValues.nombre}/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
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
                            setUpdateImg(previusState => {
                                return { ...previusState, updateImg1: downloadURL }
                            })
                            break;
                        case 'img2':
                            setUpdateImg(previusState => {
                                return { ...previusState, updateImg2: downloadURL }
                            })
                            break;
                        case 'img3':
                            setUpdateImg(previusState => {
                                return { ...previusState, updateImg3: downloadURL }
                            })
                            break;
                        case 'img4':
                            setUpdateImg(previusState => {
                                return { ...previusState, updateImg4: downloadURL }
                            })
                            break;
                        case 'img5':
                            setUpdateImg(previusState => {
                                return { ...previusState, updateImg5: downloadURL }
                            })
                            break;
                        default:
                            break;
                    }
                })
            })


    }


    function applyUpdate() {
        const db = getFirestore();
        const orderDoc = doc(db, 'items', detailProduct.id)
        updateDoc(orderDoc, {
            name: InfoValues.nombre,
            categoria: InfoValues.categoria,
            price: Number(InfoValues.precio),
            stock: Number(InfoValues.stock),
            img1: UpdateImg.updateImg1,
            img2: UpdateImg.updateImg2,
            img3: UpdateImg.updateImg3,
            img4: UpdateImg.updateImg4,
            img5: UpdateImg.updateImg5
        })
        console.log("update Aplicada")
    }
    function autoComplete() {
        setInfoValues(previusState => {
            return {
                ...previusState,
                nombre: detailProduct.name,
                categoria: detailProduct.categoria,
                precio: detailProduct.price,
                stock: detailProduct.stock
            }
        })

    }
    function IsDisabled() {
        if (((InfoValues.nombre) === '') || ((InfoValues.categoria) === '') || ((InfoValues.precio) === "") || ((InfoValues.stock) === "")) {
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
                            <input type="file" id='inputImg1' name="img1" onChange={changeImage} disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg1" className='labelInput'>
                                    <img src={UpdateImg.updateImg1} alt="" />
                                </label>
                                {
                                    UpdateImg.updateImg1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => editFunction(UpdateImg.updateImg1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg2' name="img2" onChange={changeImage} disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg2" className='labelInput'>
                                    <img src={UpdateImg.updateImg2} alt="" />
                                </label>
                                {
                                    UpdateImg.updateImg1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => editFunction(UpdateImg.updateImg2)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg3' name="img3" onChange={changeImage} disabled={IsDisabled()}></input>
                            <div className='labelInput'>

                                <label htmlFor="inputImg3" className='labelInput'>
                                    <img src={UpdateImg.updateImg3} alt="" />
                                </label>
                                {
                                    UpdateImg.updateImg1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => editFunction(UpdateImg.updateImg3)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg4' name="img4" onChange={changeImage} disabled={IsDisabled()}></input>
                            <div className='labelInput'>

                                <label htmlFor="inputImg4" className='labelInput'>
                                    <img src={UpdateImg.updateImg4} alt="" />
                                </label>
                                {
                                    UpdateImg.updateImg1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => editFunction(UpdateImg.updateImg4)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                            <input type="file" id='inputImg5' name="img5" onChange={changeImage} disabled={IsDisabled()}></input>
                            <div className='labelInput'>
                                <label htmlFor="inputImg5" className='labelInput'>
                                    <img src={UpdateImg.updateImg5} alt="" />
                                </label>
                                {
                                    UpdateImg.updateImg1 != imgUnset
                                        ?
                                        <div className="btn-deleteContainer">
                                            <button className='btn  btn-sm btn-deleteImg' onClick={() => editFunction(UpdateImg.updateImg5)}>
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
                            <img src={UpdateImg.updateImg1} alt="" />
                        </div>
                    </div>
                    <div className='containerDescription'>
                        <h2><input type="text" name='nombre' placeholder={detailProduct.name} onChange={handleChange} value={InfoValues.nombre} /></h2>
                        <span className='infoId'>Codigo: nike hombre N° id: {detailProduct.id}</span>
                        <p>$<input type="text" name='precio' placeholder={detailProduct.price} onChange={handleChange} value={InfoValues.precio} /></p>
                        <div className='talle'>
                            <div className='category-stock'>
                                <span>categoria</span>
                                <select type="text" name="categoria" onChange={handleChange} value={InfoValues.categoria}>
                                    <option value="">Seleccionar...</option>
                                    <option>running</option>
                                    <option>futbol</option>
                                    <option>training</option>
                                    <option>basquet</option>
                                </select>
                                <span>stock</span>
                                <input type="text" name="stock" placeholder={detailProduct.stock} onChange={handleChange} value={InfoValues.stock} />
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
                            <div className='mt-5 m-auto d-flex flex-column'>
                                <button className='btn btn-sm btn-warning m-2' onClick={autoComplete}>Autocompletar</button>
                                <button className='btn btn-success ' onClick={applyUpdate} disabled={IsDisabled()}>Actualizar Producto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
