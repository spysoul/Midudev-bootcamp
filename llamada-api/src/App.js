import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

const Photo = ({ photo }) => {
  return (
    <div>
      <p>{photo.title}</p>
      <img
        loading="lazy"
        className="small-image"
        src={photo.thumbnailUrl}
        alt={photo.title}
      />
    </div>
  );
};

const Loader = ({ loading }) => {
  return loading ? (
    <>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="lightBlue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <p>Cargando...</p>
    </>
  ) : (
    ""
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  // Usamos el hook useEffect para que sólo se ejecute 1 vez y no cada vez que se
  // renderize el componente
  useEffect(() => {
    setLoading(true);

    // Llamada a la API con Axios
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      });

    // Llamada a la API con Fetch
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPhotos(data);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <>
      <h1>Gallery</h1>

      <Loader loading={loading} />

      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} /> // Agregado 'key' prop para evitar advertencias
      ))}
    </>
  );
}

export default App;
