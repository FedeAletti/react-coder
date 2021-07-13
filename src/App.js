// import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <section className="bg-principal pb-2 pt-2">
        <div className="container banner-1">
          <h2>EAT, SLEEP AND SMOKE SHISHA.</h2>        
        </div>
      </section>
      <ItemListContainer greeting="Bienvenido a mi tienda" user="Roberto"/>
    </>
  )
}

export default App;
