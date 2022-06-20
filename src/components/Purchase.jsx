import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


export const Purchase = () => {
    const { cartList, precioTotal } = useCartContext()

    function orden() {
        let order = {}
        order.buyer = {
            name: values.nombre,
            lastname: values.apellido,
            email: values.email,
            phone: values.telefono,
            address: values.direccion,
            city: values.ciudad,
            state: values.provincia,
            zip: values.cp
        }
        order.total = precioTotal()
        order.items = cartList.map(products => {
            const id = products.id
            const nombre = products.name
            const precio = products.price * products.cantidad
            const cantidad = products.cantidad
            const img = products.img1
            return { id, nombre, precio, cantidad, img }
        })
        localStorage.setItem('orden', JSON.stringify(order))

    }

    const [values, setvalues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        email2: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        provincia: '',
        cp: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleChange(e) {
        const { target } = e;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value
        }
        setvalues(newValues)
    }



    return (
        <div>
            <div className='cart-bg'>
                <h2>Mis Datos:</h2>
                <form className="row g-3 container m-auto" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputName4" className="form-label"  >Nombre</label>
                        <input type="text" className="form-control" id="inputName4" name='nombre' onChange={handleChange} value={values.nombre} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLastName4" className="form-label"  >Apellido</label>
                        <input type="text" className="form-control" id="inputLastName4" name='apellido' onChange={handleChange} value={values.apellido} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' onChange={handleChange} value={values.email} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4-2" className="form-label">Repita el Email</label>
                        <input type="email" className="form-control" id="inputEmail4-2" name='email2' onChange={handleChange} value={values.email2} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone4" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="inputPhone4" name='telefono' onChange={handleChange} value={values.telefono} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Ej: 123 J.A Roca" name='direccion' onChange={handleChange} value={values.direccion} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="inputCity" name='ciudad' onChange={handleChange} value={values.ciudad} required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Provincia</label>
                        <select id="inputState" className="form-select" name='provincia' onChange={handleChange} value={values.provincia} required>
                            <option value={true}>Seleccionar...</option>
                            <option>Buenos Aires</option>
                            <option>CABA</option>
                            <option>Catamarca</option>
                            <option>Chaco</option>
                            <option>Chubut</option>
                            <option>Córdoba</option>
                            <option>Corrientes</option>
                            <option>Entre Ríos</option>
                            <option>Formosa</option>
                            <option>Jujuy</option>
                            <option>La Pampa</option>
                            <option>La Rioja</option>
                            <option>Mendoza</option>
                            <option>Misiones</option>
                            <option>Neuquén</option>
                            <option>Río Negro</option>
                            <option>Salta</option>
                            <option>San Juan</option>
                            <option>San Luis</option>
                            <option>Santa Fe</option>
                            <option>Tierra del Fuego</option>
                            <option>Tucuman</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" id="inputZip" name='cp' onChange={handleChange} value={values.cp} required />
                    </div>
                    <div className="col-12">

                        {
                            (values.email != values.email2 || values.email === "" || values.email2 === "")
                                ?
                                <span className='text-danger'>*Verifica que los correos coincidan</span>
                                :
                                <Link to={`/purchase/pay`}>
                                    <button type='submit' className="btn btn-success pagar" onClick={orden} >Continuar Compra</button>
                                </Link>
                        }



                    </div>
                </form>

            </div>
        </div >
    )


}
