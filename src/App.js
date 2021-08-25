import './App.css';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import { ItemListContainer } from './components/shop/ItemListContainer';
import { NavBar } from './components/navbar/NavBar';
import { ItemDetailContainer } from './components/shop/ItemDetailContainer/ItemDetailContainer';
import {Cart}  from './components/shop/Cart/Cart';
import CartContextProvider from './components/context/CartContext/CartContext';
import AppContextProvider from './components/context/AppContext/AppContext';

function App() {

  return (
      <AppContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
                <>
                  <NavBar/>

                    <Route exact path="/">
                      <ItemListContainer greetings="eat, sleep and smoke shisha."/>
                    </Route>
                    <Route exact path="/category/:categoryId">
                      <ItemListContainer greetings="eat, sleep and smoke shisha."/>
                    </Route>
                    <Route exact path="/cart">
                      <Cart/>
                    </Route>

                    <Route exact path="/item/:itemId" >
                        <ItemDetailContainer/>
                    </Route>
                </>
            </Switch>
          </Router>
        </CartContextProvider>

      </AppContextProvider>
  )
}

export default App;
