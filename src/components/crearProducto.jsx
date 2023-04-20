
import React, { useState } from 'react';
import axios from "axios"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import "./crearProducto.css"
function CrearProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [precioDeEnvio, setPrecioDeEnvio] = useState(0);
  const [imagen, setImagen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post("http://localhost:8080/productos",{"nombre":data.get('nombre'),"descripcion":data.get("Descripcion"),"precio":data.get("precio"),"precioDeEnvio":data.get("precioDeEnvio"),"imagen":data.get("imagen"),"cantidad":data.get("cantidad")},{withCredentials:true});
    // Aquí podrías hacer una llamada a una API para crear el producto en tu base de datos
  };

  return (
    <div className='contenedor-final-crear'>
      <form onSubmit={handleSubmit}>
        <div className='contenedor-crear'>
        <h2>Crear Producto</h2>
          <TextField
                margin="normal"
                size='small'
                required
                fullWidth
                name="nombre"
                label="Título de producto"
                type="nombre"
                id="nombre"
                autoComplete="Nombre producto"
                sx={{
                  width: 500,
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              />
              
          <TextField
            id="filled-multiline-static"
            label="Descripcion de producto"
            name="Descripcion"
            multiline
            rows={4}
            variant="filled"
            color="info"
            sx={{
              width: 500,
              boxShadow: 0,
              borderRadius: 0,
              p: 2,
              minWidth: 300,
            }}
          
          />

          <TextField name="precio" label="Precio" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{
                  width: 500,
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }} >Precio</TextField>
          <TextField name="precioDeEnvio" label="Precio de envio" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{
                  width: 500,
                  boxShadow: 0,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }} >Precio de envio</TextField>
                  <TextField
                margin="normal"
                size='small'
                required
                fullWidth
                name="imagen"
                label="Url imagen"
                type="imagen"
                id="imagen"
                autoComplete="imagen"
                sx={{
                  width: 500,
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              />
              <TextField name="cantidad" label="cantidad" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{
                  width: 500,
                  boxShadow: 0,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }} >cantidad</TextField>
                      <Button type="submit" variant="contained" color="success">
        Crear
      </Button>
        </div>
      </form>
    </div>
  );
}

export default CrearProducto;
