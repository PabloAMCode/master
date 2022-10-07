import React from 'react'
import './Hilo.css'


function Hilo(props) {
  // function redirect(){
  //   this.props.history.push("/hilocontent", {state : props});
  // }

  const theadData = props.data;
  return (
    <div className='input_text'>
        <span>User: {theadData.name}, </span> <span>Email: {theadData.email}</span>

        <p>{theadData.password}</p>

        <p>{theadData.id}</p>
{/* 
        <input type="button" value="Ir al hilo" onClick={redirect()} className='buttons'/> */}
        
    </div>
  )
}

export default Hilo