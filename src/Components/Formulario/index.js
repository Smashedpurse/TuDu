import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import "./styles.css"

const Formulario = (props) => {
  /*
   *Stateless
   *Statefull
   *
   * Formularios contralados
   * 1-Crear un estado(useState)
   * 2-Vincular el input con el estado --> value
   * 3-Manejar el evento onChange
   *  3.1 - Generamos una función que reciba el evento
   *  3.2 - Vincular el onChange del input con el 3.1
   *  3.3 - Debemos actualizar el estado accediendo al evento.target.value y usando la función que actualiza el estado
   * 4-Cuando tenemos controlados todos los inputs vamos a manejar el evento onSubmit del form
   *  4.1 - Generamos una función que reciba el evento
   *  4.2 - Vincular el onSubmit del form con el 4.1
   *  4.3 - Prevenir el comportamiento por defecto. Esto de la siguiente manera: evento.preventDefault()
  */

 const [titulo,setTitulo]=useState("")
 const [descripcion,setDescripcion]=useState("")

 function manejaCambio(evento){
  setTitulo(evento.target.value)
 }

 function manejaDescripcion(evento){
  setDescripcion(evento.target.value)
 }

 function enviarDatos(evento){
  evento.preventDefault()
  props.envioTarea(
    {
      titulo:titulo,
      descripcion:descripcion,
      completada:false
    })
    setTitulo("");
    setDescripcion("");
 }


  

  return (
    <form className='Formulario' onSubmit={enviarDatos}>
      <h2>Agrega tu tarea</h2>
      <input placeholder='Ingresa el titulo'value={titulo} onChange={manejaCambio}
      />
      <input placeholder='Ingresa tu descripcion' value={descripcion} onChange={manejaDescripcion}
      />
      <Button variant='primary' type='submit'>Agregar</Button>
    </form>
  )
}

export default Formulario