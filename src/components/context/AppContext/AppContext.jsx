import React, { createContext, useContext, useState, useEffect} from 'react';
import {getFirestore} from '../../shop/firebaseService'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dbQuery = getFirestore()
    dbQuery.collection('items').get()
    .then(resp => setProducts(resp.docs.map(it=> ({...it.data()}) )))
  },[])

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
