import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const Purchase = () => {
  const initialForm = {
    nombre: "",
    apellido: "",
    email: "",
    email2: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    cp: "",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.nombre.trim()) {
      errors.nombre = "Este campo no puede quedar vacio";
    } else if (!regexName.test(form.nombre.trim())) {
      errors.nombre = "Este campo no puede contener simbolos";
    }

    if (!form.apellido.trim()) {
      errors.apellido = "Este campo no puede quedar vacio";
    }

    if (!form.email.trim()) {
      errors.email = "Este campo no puede quedar vacio";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email =
        "Este campo no puede contener simbolos ni espacios en blanco";
    }

    if (!form.email2.trim()) {
      errors.email2 = "Este campo no puede quedar vacio";
    } else if (!regexEmail.test(form.email2.trim())) {
      errors.email2 =
        "Este campo no puede contener simbolos ni espacios en blanco";
    } else if (form.email != form.email2) {
      errors.email2 = "No coinciden";
      errors.email = "No coinciden";
    }
    if (!form.telefono.trim()) {
      errors.telefono = "Este campo no puede quedar vacio";
    }

    if (!form.direccion.trim()) {
      errors.direccion = "Este campo no puede quedar vacio";
    }

    if (!form.ciudad.trim()) {
      errors.ciudad = "Este campo no puede quedar vacio";
    }

    if (!form.provincia.trim()) {
      errors.provincia = "Este campo no puede quedar sin seleccionar";
    }

    if (!form.cp.trim()) {
      errors.cp = "Este campo no puede quedar vacio";
    }

    return errors;
  };

  const {
    form,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <div className="cart-bg">
        <h2>Mis Datos:</h2>
        <form
          className="row g-3 container m-auto"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <label htmlFor="inputName4" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName4"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.nombre}
              required
            />
            {errors.nombre && <p className="text-danger">*{errors.nombre}</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName4" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName4"
              name="apellido"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.apellido}
            />
            {errors.apellido && (
              <p className="text-danger">*{errors.apellido}</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email}
            />
            {errors.email && <p className="text-danger">*{errors.email}</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4-2" className="form-label">
              Repita el Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4-2"
              name="email2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email2}
            />
            {errors.email2 && <p className="text-danger">*{errors.email2}</p>}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone4" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPhone4"
              name="telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.telefono}
            />
            {errors.telefono && (
              <p className="text-danger">*{errors.telefono}</p>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Ej: 123 J.A Roca"
              name="direccion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.direccion}
            />
            {errors.direccion && (
              <p className="text-danger">*{errors.direccion}</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="ciudad"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.ciudad}
            />
            {errors.ciudad && <p className="text-danger">*{errors.ciudad}</p>}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Provincia
            </label>
            <select
              id="inputState"
              className="form-select"
              name="provincia"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.provincia}
            >
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
            {errors.provincia && (
              <p className="text-danger">*{errors.provincia}</p>
            )}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="cp"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.cp}
            />
            {errors.cp && <p className="text-danger">*{errors.cp}</p>}
          </div>
          <div className="col-12">
            <Link to={"/purchase/pay"}>
              <button type="submit" className="btn btn-secondary">
                Enviar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
