import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Boostrap
import NavbarComponent from './Components/Navbar'
import Formulario from './Components/Formulario'
import ListaTareas from './Components/ListaTareas';
import {useState} from 'react'
//Our Components

function App() {
  const todasLasTareasIniciales = [
    {
      titulo:"Hacer que funcione el TuDu",
      descripcion:"Estamos aprendiendo React",
      completada:false
    },
    {
      titulo:"Aprender rutas en React",
      descripcion:"Aprender como funcionan las rutas en React",
      completada:false
    },
    {
      titulo:"Subir los laboratorios",
      descripcion:"Meterle presión a los laboratorios",
      completada:false
    },
    {
      titulo:"Subir el ultimo proyecto de React",
      descripcion:"Sacarle ya el ultimo proyecto final y ser superpoderoso",
      completada:false
    }
  ]; 
  const [todasLasTareas,setTodasLasTareas] = useState (todasLasTareasIniciales)
  
  const envioTarea = (nuevaTarea) => {
    console.log("🚀 ~ file: App.jsx ~ line 43 ~ envioTarea ~ nuevaTarea", nuevaTarea)
    
    /** 
    * Como actualizar un arreglo con nuevos datos
    *1.- Crea la copia con el spreadOperator para arreglos
      NUNCA SE USA PUSH PARA INGRESAR UN VALOR AL ARREGLO DENTRO DE REACT// NUNCA SE ACTUALIZA DE MANERA DIRECTA
    *2.-Agregar el nuevo objeto al arreglo copia
    *3.-Actualizar el estado con el nuevo arreglo
    */
    
    //1-Hacemos la copia 
    const nuevoArreglo = [...todasLasTareas,nuevaTarea]
    console.log("🚀 ~ file: App.jsx ~ line 52 ~ envioTarea ~ nuevoArreglo", nuevoArreglo)
    setTodasLasTareas(nuevoArreglo)
  };
      

  
   const eliminarTarea = (posicion) => {
    // 1-Creamos la copua con el spreadOperatos
    // 2-Usamos el método SPLICE para eliminar a partir de una posición
    // 3-Actualizamos el estado con el nuevo arreglo del paso 2
    const nuevoArreglo = [...todasLasTareas,]

    nuevoArreglo.splice(posicion, 1)

    setTodasLasTareas(nuevoArreglo)

    console.log(posicion)
   }
   



  return (
    <div className="App">
    <NavbarComponent todasLasTareas = {todasLasTareas}/>
      <Container>
        <Row>
          <Col> 
            <Formulario envioTarea={envioTarea}/>
          </Col>
          <Col>
            <ListaTareas 
            todasLasTareas = {todasLasTareas}
            eliminarTarea = {eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
