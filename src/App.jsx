
import './App.css'
import {BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Pricing from './components/Pricing';
import CrearProducto from './components/crearProducto';
import { Provider,useSelector } from 'react-redux';
import {store} from './redux/store';
import { useState,useEffect } from 'react';
function App() {
  const [user,setUser]=useState({})
  useEffect(() => {
  }, []);
  store.subscribe(() => {
    setUser(store.getState().login)
    console.log(user)
  });
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/crearProducto" element={<CrearProducto />} />
        <Route path="/Login" element={(user.isLoggedIn)?<Navigate to="/"/>:<Login/> } />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
