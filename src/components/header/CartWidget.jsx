import { useContext } from "react"
import { ProductCartContext } from "../../context/ProductCartProvider"
import {Link} from "react-router-dom"

export const CartWidget = () => {
  const cartContext = useContext(ProductCartContext);
  const {productCart, resetCart} = cartContext;
  const itemsInCart = productCart.reduce((acc, product) => (acc + product.amountInCart), 0);

  console.log(cartContext);

  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span class="badge badge-sm indicator-item">
            {itemsInCart}
          </span>
        </div>
      </label>
      <div
        tabindex="0"
        class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div class="card-body">
          <span class="font-bold text-lg">{itemsInCart} Items</span>
          {
            productCart.map((product) => (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #000'
              }}>
                <img src={product.image} alt={product.desc} style={{
                  width: '50px',
                  height: '50px',
                }}/>
                <span>{product.name}</span>
                <span>{product.amountInCart}</span>
                <span>${product.price}</span>
              </div>
            ))
          }
          <span class="text-info">
            Subtotal: $
            {productCart.reduce(
              (acc, product) => acc + product.price * product.amountInCart,
              0
            )}
          </span>
          <div class="card-actions">
            <Link to={`/cart`} class="btn btn-primary btn-block">View cart</Link>
            <button class="btn btn-danger btn-block" onClick={resetCart}>Clear cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
