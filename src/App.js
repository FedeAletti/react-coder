// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/shop/ItemListContainer';
import { NavBar } from './components/navbar/NavBar';

function App() {
  


  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greetings="eat, sleep and smoke shisha."/>

    </>
  )
}

export default App;
