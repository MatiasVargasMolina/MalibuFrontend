
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./components/Home"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import Pricing from './components/Pricing';
import CrearProducto from './components/crearProducto';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/crearProducto" element={<CrearProducto />} />
      </Routes>
    </Router>
  )
}

export default App
