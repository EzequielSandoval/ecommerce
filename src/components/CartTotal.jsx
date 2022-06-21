import React from "react";
import { Link } from "react-router-dom";

export const CartTotal = ({ qtyTotal, priceTotal, deleteCart }) => {
  return (
    <div>
      <div className="totalContainer">
        <div className="totalDetail">
          <div className="totales">
            <span>
              Cantidad de productos: {qtyTotal() !== 0 && qtyTotal()}
            </span>
            <span>TOTAL: ${priceTotal() !== 0 && priceTotal()}</span>
          </div>
          <div className="totalButtons">
            <button
              className="btn btn-outline-danger btn-sm w-50 m-2"
              onClick={deleteCart}
            >
              vaciar carrito
            </button>
            <Link to={`/purchase`}>
              <button className="btn btn-dark w-80 m-2">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
