import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductCartContext } from "../../context/ProductCartProvider";
import { getFirestore, doc,  getDoc } from 'firebase/firestore/lite'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { productAmountChange } = useContext(ProductCartContext);

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, 'productos', id)
    getDoc(queryProduct)
      .then(resp => setProducts({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      setLoading(false);
  }, []);

  console.log(products);

  return (
    <div>
      {loading ? (
        <h2> Cargando...</h2>
      ) : (
        <div className="ml-[450px]">
          <div className="artboard artboard-horizontal phone-6">
            <img src={products.image} alt="" />
          </div>

          <div class="indicator ml-10">
            <div class="indicator-item ">
              <button
                class="btn btn-primary"
                onClick={() => productAmountChange(products, +1)}
              >
                Buy
              </button>
            </div>
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">{products.name}</h2>
                <p>{products.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
