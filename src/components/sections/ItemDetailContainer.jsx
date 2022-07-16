import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import { useState, useEffect, useContext } from "react";
import { ProductCartContext } from "../../context/ProductCartProvider";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { productAmountChange } = useContext(ProductCartContext);

  useEffect(() => {
    getFetch
      .then((resp) =>
        setProducts(resp.filter((products) => products.id === Number(id)))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2> Cargando...</h2>
      ) : (
        <div className="ml-[450px]">
          <div className="artboard artboard-horizontal phone-6">
            <img src={products[0].image} alt="" />
          </div>

          <div className="indicator ml-10">
            <div className="indicator-item ">
              <button
                className="btn btn-primary"
                onClick={() => productAmountChange(products[0], +1)}
              >
                Buy
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">{products[0].name}</h2>
                <p>{products[0].desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
