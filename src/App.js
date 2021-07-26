// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/shop/ItemListContainer';
import { NavBar } from './components/navbar/NavBar';
import { ItemDetailContainer } from './components/shop/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greetings="eat, sleep and smoke shisha."/>
      <div className="container mt-2">
         <ItemDetailContainer/>
      </div>
    </>
  )
}

export default App;
