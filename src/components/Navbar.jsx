import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BotonCategory from "./BotonCategory"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
export default function ButtonAppBar() {
  const user= useSelector((state)=>state.login);
  console.log(user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" href='/'>Ofertas</Button>
          </Typography>
          <BotonCategory>Categoría</BotonCategory>
          <Button color="inherit" href='/crearProducto'>Vender</Button>
          {(user.isLoggedIn)?<></>:<><Button color="inherit" href='/login'>Login</Button>
          <Button color="inherit" href='/register'>Register</Button></>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
