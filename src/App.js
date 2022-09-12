import './App.css';

import NavBar from './components/NavBar/navbar.jsx';
import ItemListContainer from './components/container/itemlistcontainer.jsx';
import Hermes from './components/images/tituloHermes.jpg';
import ItemDetailContainer from './components/container/itemdetailcontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/carrito/itemList';

const App = () => {


  return (
    
    <div className="App">
      <img src={Hermes} className="d-flex justify-content-start" alt="Logo de la tienda" />
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/*<Route path="" element={<ItemDetail/>} />*/}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
