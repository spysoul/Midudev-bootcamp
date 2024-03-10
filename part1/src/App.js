import "./App.css";
import Mensaje from "./Mensaje";

const Descripcion = () => {
  return <p>Esta es la Descripción de la app</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="yellow" message="en un" />
      <Mensaje color="green" message="curso de REACT" />
      <Descripcion />
    </div>
  );
};

export default App;
