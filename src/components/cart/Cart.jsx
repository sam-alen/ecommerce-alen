import { useContext } from "react"
import { ProductCartContext } from "../../context/ProductCartProvider"

function Cart() {
  const cartContext = useContext(ProductCartContext);
  const {productCart, resetCart} = cartContext;
 
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
                <span>{product.amountInCart}</span>
                <span>${product.price}</span>
              </div>)}
              </ul>
              <span class="text-info">
                Subtotal: $
                {productCart.reduce(
                  (acc, product) => acc + product.price * product.amountInCart,
                  0
                )}
            </span>

            <button onClick={resetCart} className='btn flex'>Vaciar carrito</button>
        </div>
      )
}

export default Cart
