import React, { useEffect,useState } from 'react';
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./home.css"
import Zoom from '@mui/material/Zoom';
function Home() {
    const [data,setData]=useState([]);
    const [click,setClick]=useState(true);
    const [productoSeleccionado,setProductoSeleccionado]=useState({nombre:""})
    useEffect(() => {
        const obtenerUsuarios = async () => {
          const resultado = await axios.get('http://localhost:8080/productos');
          setData(resultado.data);
        }
        obtenerUsuarios();
      }, []);
    function handlePopoverOpen(producto){
      setProductoSeleccionado(producto);
      setClick(true)
      console.log(productoSeleccionado)
    }
    function handlePopoverClose(){
      setClick(false);
      setProductoSeleccionado({});
    }
    return (
        <div className='contenedor-home'>
            {data.map((product) => (
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
                          <Typography gutterBottom variant="h8" component="div" sx={{color:"#04FF00"}}>
                            6x ${" "+(product.precio/6).toLocaleString("en")+" sin interés"}
                          </Typography>
                          {(product.precioDeEnvio==0)?<><Typography gutterBottom variant="h8" component="div" sx={{color:"#04FF00"}}>
                            Envio gratis
                          </Typography></>:<></>

                          }
                          {
                            (click&&product._id==productoSeleccionado._id)?<>                   <Typography variant="body2" color="text.secondary">
                            {product.nombre}
                          </Typography></>:<></>
                          }
                        </CardContent>
                        <CardActions>
                        </CardActions>
                      </Card>
                    </div>
      ))}
        </div>
    );
}

export default Home;