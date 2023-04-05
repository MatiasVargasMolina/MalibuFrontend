import React, { useEffect,useState } from 'react';
import axios from "axios"
function Home() {
    const [data,setData]=useState([]);
    useEffect(() => {
        const obtenerUsuarios = async () => {
          const resultado = await axios.get('http://localhost:8080/productos');
          setData(resultado.data);
        }
        obtenerUsuarios();
      }, []);
    
    return (
        <div>
            {data.map((product) => (
        <li key={product.id}>
          {product.nombre} ({product.descripcion} años)
        </li>
      ))}
        </div>
    );
}

export default Home;