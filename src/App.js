import logo from './logo.svg';
import './App.css';

const App = () => {

  const pagina = {nombre: "Ezequiel", titulo: "Libros"}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a {pagina.nombre.toLocaleUpperCase()} {pagina.titulo.toLocaleUpperCase()}.
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
