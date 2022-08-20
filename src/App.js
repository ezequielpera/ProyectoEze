import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';

const App = () => {


  return (
    <div className="App">
      <div className="Container">
        <div className="TituloUno"><h1>HERMES</h1></div>
        <div className="TituloDos"><h2>VENTA DE LIBROS</h2></div>
      </div>
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos!
        </p>
        <ButtonComponent/>
        
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button>Entrar</button>
}
  

export default App;
