
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
import axios from "axios"
function App() {
  const [username,setUsername] = useState("")
  const obtenerData=async()=>{
    try{
      const {data} = await axios.get("api/test/user",{ withCredentials:true });
      setUsername(data)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    obtenerData()
  },[])

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>}/>
        <Route path="/register" element={<><Navbar /><Register /></>} />
        <Route path="/pricing" element={<><Navbar /><Pricing /></>} />
        <Route path="/crearProducto" element={<><Navbar /><CrearProducto /></>} />
        <Route path="/Login" element={(username!="")?<><Navigate to="/"/></>:<><Login /></> } />
      </Routes>
    </Router>
    </Provider>
  )
}

export default App
