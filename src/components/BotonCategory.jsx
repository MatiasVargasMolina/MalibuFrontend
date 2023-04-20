import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from "axios"
import {useState,useEffect} from "react"
export default function BotonCategory() {
  const[categorias,setCategorias]=useState([]);
  const obtenerCategorias=async()=>{
    const {data}=await axios.get("http://localhost:8080/categorias")
    setCategorias(data);
  }
  useEffect(()=>{
    obtenerCategorias();
  },[])
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel variant="standard" disableAnimation htmlFor="uncontrolled-native">

        </InputLabel>
        <NativeSelect 
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
            shrink: "true" 
          }}
        >
          {categorias.map((categoria) => (<>
          <option value={categoria.name}>{categoria.name}</option>
          </>))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}