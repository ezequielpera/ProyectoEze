import './App.css';

import NavBar from './components/NavBar/navbar.jsx';
import Titulo from './components/NavBar/titulo.jsx';
import ItemListContainer from './components/container/itemlistcontainer.jsx';

const App = () => {


  return (
    <div className="App">
      <div className="Container">
        
      </div>
      <Titulo/>
      <NavBar/>
      <ItemListContainer greeting="Mensaje a reemplazar"/>
    </div>
  );
  }
export default App;
