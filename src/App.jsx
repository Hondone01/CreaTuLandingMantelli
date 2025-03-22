import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a C-Monster, la mejor tienda vape!" />
    </div>
  );
}

export default App;

