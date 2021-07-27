// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import { ItemListContainer } from './components/shop/ItemListContainer';
import { NavBar } from './components/navbar/NavBar';
import { ItemDetailContainer } from './components/shop/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/shop/Cart/Cart';


function App() {

  
  return (
    
      <Router>
        <Switch>
            <>
              <NavBar/>
              <Route exact path="/category/">
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
  )
}

export default App;
