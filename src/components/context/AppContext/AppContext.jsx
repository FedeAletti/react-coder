import prods from '../../shop/productos.json'
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(prods);
    // console.log(products);
  return (
    <AppContext.Provider
      value={{
        products
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
