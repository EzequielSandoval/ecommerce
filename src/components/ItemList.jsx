import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Item } from "./Item";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    if (id) {
      const queryCollectionFilter = query(
        queryCollection,
        where("categoria", "==", id)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div className="itemsGeneralContainer row row-cols-5 container mx-auto justify-content-center">
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div
            className=" spinner-border text-light m-5"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        </div>
      ) : (
        items.map((item) => (
          <div className="col " key={item.id}>
            <Item
              nameItem={item.name}
              stockItem={item.stock}
              imgItem={item.img1}
              priceItem={item.price}
              boton={
                <div className="footerItem">
                  <Link to={`/detalles/${item.id}`}>
                    <button className="buttonAdd btn btn-outline-dark btn-sm">
                      Continuar Compra
                    </button>
                  </Link>
                </div>
              }
            />
          </div>
        ))
      )}
    </div>
  );
};
