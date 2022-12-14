import './App.css';

import NavBar from './components/NavBar/navBar.jsx';
import ItemListContainer from './components/container/itemListContainer.jsx';
import Hermes from './components/images/tituloHermes.jpg';
import ItemDetailContainer from './components/container/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {


  return (
    
    <div className="App">
      <img src={Hermes} className="d-flex justify-content-start" alt="Logo de la tienda" />
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" exact element={<ItemListContainer />} />
          <Route path="/detalle/:productsId" exact element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
