import { useState } from "react";

import { useCartContext } from "../context/CartContext";
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { cartList, priceTotal } = useCartContext();
  const [loading, setloading] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      let order = {};
      order.buyer = {
        name: form.nombre,
        lastname: form.apellido,
        email: form.email,
        phone: form.telefono,
        address: form.direccion,
        city: form.ciudad,
        state: form.provincia,
        zip: form.cp,
      };
      order.total = priceTotal();
      order.items = cartList.map((products) => {
        const id = products.id;
        const nombre = products.name;
        const precio = products.price * products.cantidad;
        const cantidad = products.cantidad;
        const img = products.img1;
        return { id, nombre, precio, cantidad, img };
      });
      localStorage.setItem("orden", JSON.stringify(order));
      setloading(false);
    } else {
      return;
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  return {
    form,
    errors,
    handleBlur,
    loading,
    handleSubmit,
    handleChange,
  };
};
