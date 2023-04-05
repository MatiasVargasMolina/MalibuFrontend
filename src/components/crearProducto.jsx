
import React, { useState } from 'react';
import axios from "axios"
function CrearProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [precioDeEnvio, setPrecioDeEnvio] = useState(0);
  const [imagen, setImagen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/productos",{"nombre":nombre,"descripcion":descripcion,"precio":precio,"precioDeEnvio":precioDeEnvio,"imagen":imagen},{withCredentials:true});
    // Aquí podrías hacer una llamada a una API para crear el producto en tu base de datos
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="number" value={precio} onChange={(event) => setPrecio(event.target.value)} />
        </label>
        <br />
        <label>
          Precio de envío:
          <input type="number" value={precioDeEnvio} onChange={(event) => setPrecioDeEnvio(event.target.value)} />
        </label>
        <br />
        <label>
          URL de la imagen:
          <input type="text" value={imagen} onChange={(event) => setImagen(event.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearProducto;
