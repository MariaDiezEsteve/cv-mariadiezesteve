import './App.css';
import Home from "./components/Home.jsx"


const name = "María Diez Esteve" // Estamos pasando el nombre como props en el archivo HOME

function App() {
  return (
    <div className="App">
      <Home home={name}/>
    </div>
  );
}

export default App;
