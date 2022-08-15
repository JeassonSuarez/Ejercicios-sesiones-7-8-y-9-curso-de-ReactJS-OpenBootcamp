import logo from './logo.svg';
import './App.css';
import ListaContactosComponent from './container/listaContactosComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaContactosComponent />
      </header>
    </div>
  );
}

export default App;
