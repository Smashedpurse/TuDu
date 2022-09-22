import React from 'react'
import Button from 'react-bootstrap/Button';
import "./styles.css"

const Tarea = (props) => {
  const{titulo,descripcion,indice}=props
  return (
    <div className='Tarea'>
      <div>
      <input type="checkbox"></input>
      <span>{indice+1}- </span>
      <span>{titulo}</span>
      <Button variant='danger' style={{borderRadius:"50%"}} onClick={()=>{
          props.eliminarTarea(props.indice)
        }}
        >
          X
        </Button>
      </div>
      <p>{descripcion}</p>
    </div>
  )
}

export default Tarea