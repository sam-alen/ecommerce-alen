import { useState } from "react";
import { createContext } from "react";

export const ProductCartContext = createContext();
const { Provider } = ProductCartContext;

export const ProductCartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([]);
  const productAmountChange = (product, amount) => {
    setProductCart((prevState) => {
      const currentProduct = prevState.filter(
        (cart) => cart.id === product.id
      )[0] || { ...product, amountInCart: 0 };
      const newProductCart = prevState.filter((cart) => cart.id !== product.id);
      
      if (Math.max(currentProduct.amountInCart + amount, 0) > 0) {
        currentProduct.amountInCart += amount;


        return [
          ...newProductCart,
          currentProduct,
        ];
      }

      return newProductCart;
    });
  };

  const resetCart = () => setProductCart([]);

  return (
    <Provider
      value={{
        productCart,
        productAmountChange,
        resetCart
      }}
    >
      {children}
    </Provider>
  );
};
