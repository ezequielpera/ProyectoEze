import './App.css';

import NavBar from './components/NavBar/navbar.jsx';
import ItemListContainer from './components/container/itemlistcontainer.jsx';
import Hermes from './components/images/tituloHermes.jpg'; 
import ItemDetailContainer from './components/container/itemdetailcontainer';

const App = () => {


  return (
    <div className="App">
      <img src={Hermes} className="d-flex justify-content-start" alt="Logo de la tienda" />
      <NavBar/>
      {/*<ItemListContainer/>*/}
      <ItemDetailContainer/>
    </div>
  );
  }
export default App;
