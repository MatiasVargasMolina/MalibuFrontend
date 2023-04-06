import React, { useEffect,useState } from 'react';
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./home.css"

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
        <div className='contenedor-home'>
            {data.map((product) => (
                <div className='contenedor-producto'>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 140 }}
                          component="img"
                          image={product.imagen}
                          title={product.nombre}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.nombre}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.descripcion}
                          </Typography>
                        </CardContent>
                        <CardActions>
                        <Typography variant="body2" color="text.secondary">
                            {product.precio}
                          </Typography>
                          <Button size="small">Comprar</Button>
                        </CardActions>
                      </Card>
                    </div>
      ))}
        </div>
    );
}

export default Home;