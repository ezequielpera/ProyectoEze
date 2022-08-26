import './App.css';

import NavBar from './components/NavBar/navbar.jsx';
import ItemListContainer from './components/container/itemlistcontainer.jsx';
import Hermes from './components/images/tituloHermes.jpg';

const App = () => {


  return (
    <div className="App">
      <img src={Hermes} className="d-flex justify-content-start" alt="Logo de la tienda" />
      <NavBar/>
      <ItemListContainer greeting="Mensaje a reemplazar"/>
    </div>
  );
  }
export default App;
