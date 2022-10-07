import React, {useState} from 'react'
import './Login.css';
import {useParams} from 'react-router-dom'

function CrearHilo() {

    
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const urlParams = useParams();

    function crearh(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titulo, author: 'Usuario anónimo', date:'06/12/1998', content: descripcion})
        };

        fetch('http://localhost:8080/threads/'+urlParams.id+'/newSubThread', requestOptions)
        .then(response => response.json());
    }
    const handleData = event => {
        setTitulo(event.target.value);
      }
      const handleData2 = event => {
        setDescripcion(event.target.value);
      }

  return (
    <div className='login'>
         <div>
                <form>
                    <label>
                        <input type="text" onChange={handleData} placeholder="Título" className='input_text2'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" onChange={handleData2} placeholder="Escribe algo..." className='input_text2'/>
                    </label>
                </form>
            </div>
            <div>
                <input type="button" value="Crear Hilo" onClick={crearh} className='buttons'/>                
            </div>
    </div>
  )
}

export default CrearHilo