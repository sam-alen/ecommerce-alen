import { useContext } from "react"
import { ProductCartContext } from "../../context/ProductCartProvider"
import { collection,addDoc, getFirestore} from 'firebase/firestore'

function Cart() {
  const cartContext = useContext(ProductCartContext);
  const {productCart, resetCart, productAmountChange} = cartContext;

  const generateOrder = ()=>{
    const order = {};
    order.buyer = {name: "John Doe", address: "123 Main St", city: "New York", state: "NY", zip: "10001"};
    order.productos = productCart;
    order.total = productCart.reduce(
      (acc, product) => acc + product.price * product.amountInCart,
      0
    );

      const db = getFirestore()
      const queryInsert = collection(db, 'orders')
      addDoc(queryInsert, order)
        .then( resp => console.log(resp))
        .catch( err => console.log(err))
        .finally(()=>{resetCart()});

}
    return(
        <div>
            <h1>Carrito</h1>
              <h2>Productos</h2>
              <ul>
               {productCart.map(product => <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #000'
              }}>
                <img src={product.image} alt={product.desc} style={{
                  width: '100px',
                  height: '100px',
                }}/>
                <span>{product.name}</span>
                <div>
                  <button 
                    onClick={() => productAmountChange(product, -1)}
                  >
                    -
                  </button>
                  <span>{product.amountInCart}</span>
                  <button
                    onClick={() => productAmountChange(product, +1)}
                  >
                    +
                  </button>
                </div>
                <span>${product.price}</span>
              </div>)}
              </ul>
              <span className="text-info">
                Subtotal: $
                {productCart.reduce(
                  (acc, product) => acc + product.price * product.amountInCart,
                  0
                )}
            </span>

            <button onClick={resetCart} className='btn flex'>Reset Cart</button>
            <button onClick={generateOrder} className='btn flex'>Generate Order</button>
        </div>
      )
}

export default Cart
