import { useState } from "react";
import { createContext } from "react";

export const ProductCartContext = createContext();
const { Provider } = ProductCartContext;

export const ProductCartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState({});
  const productAmountChange = (product, amount) => {
    setProductCart((prevState) => {
      const currentProduct = prevState[product.id] || {
        ...product,
        amountInCart: 0,
      };

      if (Math.max(currentProduct.amountInCart + amount, 0) > 0) {
        currentProduct.amountInCart += amount;

        return { 
          ...prevState,
          [product.id]: currentProduct
        };
      }

      const {[product.id]: productDeleted, ...rest} = prevState;

      return rest;
    });
  };

  return (
    <Provider
      value={{
        productCart,
        productAmountChange,
      }}
    >
      {children}
    </Provider>
  );
};
