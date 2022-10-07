import React from 'react'
import './Hilo.css'


function Hilo(props) {
  // function redirect(){
  //   this.props.history.push("/hilocontent", {state : props});
  // }

  const theadData = props.data;
  return (
    <div className='input_text'>
        <span>User: {theadData.author}, </span> <span>Date: {theadData.date}</span>

        <p>{theadData.title}</p>

        <p>{theadData.content}</p>
{/* 
        <input type="button" value="Ir al hilo" onClick={redirect()} className='buttons'/> */}
        
    </div>
  )
}

export default Hilo