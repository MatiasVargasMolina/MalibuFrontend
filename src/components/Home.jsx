import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const socket = io('http://localhost:8081');
import "./home.css"
function Home() {
    const [products, setProducts] = useState([]);
    const [click,setClick]=useState(true);
    const [productoSeleccionado,setProductoSeleccionado]=useState({nombre:""})
    function handleClick(product) {
        socket.emit('updateStock', { product });
      }
      function handlePopoverOpen(producto){
        setProductoSeleccionado(producto);
        setClick(true)
      }
      function handlePopoverClose(){
        setClick(false);
        setProductoSeleccionado({});
      }
      const aumentarCantidad=(event,product) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(product)
        socket.emit('updateStock', {product:{ id:product._id,nombre:product.nombre,descripcion:product.descripcion,precio:product.precio,precioDeEnvio:product.precioDeEnvio,imagen:product.imagen,cantidad:product.cantidad+Number(data.get(product.nombre))}} );
      }
      const disminuirCantidad=(event,product) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(product)
        socket.emit('updateStock', {product:{ id:product._id,nombre:product.nombre,descripcion:product.descripcion,precio:product.precio,precioDeEnvio:product.precioDeEnvio,imagen:product.imagen,cantidad:product.cantidad-Number(data.get(product.nombre))}} );
      }
    useEffect(() => {
      // Escuchar el evento "products" de Socket.io
      try{
        socket.connect();
        socket.on('products', (products2) => {
            setProducts(products2);
          });
      
          // Escuchar el evento "productUpdated" de Socket.io
          socket.on('productUpdated', (product) => {
            setProducts((prevProducts) =>{
            console.log(prevProducts);
              products.map((p) => (p.id === product.id ? product : p)) }
            );
          });
      
          // Devolver una función de limpieza para desconectar el cliente de Socket.io
          return () => {
            socket.disconnect();
          };
      }
      catch(err){
        console.log(err)
      }
    }, []);
  
    return (
        <div className='contenedor-home'>
            {products.map((product) => (
                <div onMouseEnter={()=>{handlePopoverOpen(product)}}
               onMouseLeave={()=>{handlePopoverClose()}}  key={product.id}  className='contenedor-producto'>
                        <Card sx={{ maxWidth: 345, cursor:"pointer"}} >
                        <CardMedia
                          sx={{ height: 140 }}
                          component="img"
                          image={product.imagen}
                          title={product.nombre}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ${" "+product.precio.toLocaleString("en")}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {"stock : "+product.cantidad.toLocaleString("en")}
                          </Typography>
                          <Typography gutterBottom variant="h8" component="div" sx={{color:"#0BC811"}}>
                            6x ${" "+(product.precio/6).toLocaleString("en")+" sin interés"}
                          </Typography>
                          <button onClick={()=>handleClick({id:product._id,nombre:product.nombre,descripcion:product.descripcion,precio:product.precio,precioDeEnvio:product.precioDeEnvio,imagen:product.imagen,cantidad:product.cantidad+1})}>Aumentar Stock</button>
                          <button onClick={()=>handleClick({id:product._id,nombre:product.nombre,descripcion:product.descripcion,precio:product.precio,precioDeEnvio:product.precioDeEnvio,imagen:product.imagen,cantidad:product.cantidad-1})}>Disminuir Stock</button>
                          {(product.precioDeEnvio==0)?<><Typography gutterBottom variant="h8" component="div" sx={{color:"#0BC811"}}>
                            Envio gratis
                          </Typography></>:<></>

                          }
                          {
                            (click&&product._id==productoSeleccionado._id)?<>                   <Typography variant="body2" color="text.secondary">
                            {product.nombre}
                          </Typography></>:<></>
                          }
                        </CardContent>
                        <Box sx={{display:"flex",flexDirection:"row"}}>
                        <Box component="form" onSubmit={(event)=>{aumentarCantidad(event,product) }} noValidate sx={{ mt: 1,paddingRight:10 }}>
                        <TextField
              margin="normal"
              required
              fullWidth
              id={product.nombre}
              label="valor"
              name={product.nombre}
              autoComplete="valor"
              autoFocus
            />
                        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:"green" }}
            >
              Aumentar cantidad ingresada
            </Button>
            </Box>
            <Box component="form" onSubmit={(event)=>{disminuirCantidad(event,product) }} noValidate sx={{ mt: 1 }}>
                        <TextField
              margin="normal"
              required
              fullWidth
              id={product.nombre}
              label="valor"
              name={product.nombre}
              autoComplete="valor"
            />
                        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:"red"}}
            >
              Disminuir cantidad ingresada
            </Button>
            </Box>
            </Box>
                        <CardActions>
                        </CardActions>
                      </Card>
                      
                    </div>
      ))}
        </div>
    );
  }
  
  export default Home;
