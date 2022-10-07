import React from 'react'
import './Hilo.css';

function Threads(props) {

  const goToHilos = (id) => {
    window.location.href = "/hilos/"+id;

  }

  const theadData = props.data

  return (
    <div className='input_text'>
      <div>{theadData.name}</div>
      <div>{theadData.email}</div>
      <button onClick={() => goToHilos(theadData.id)}>Ir a los hilos</button>
    </div>
  )
}

export default Threads