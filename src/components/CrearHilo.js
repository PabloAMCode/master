import React from 'react'
import './Login.css';

function CrearHilo() {

    function crearh(){
        console.log("Crear Hilo");
    }

  return (
    <div className='login'>
         <div>
                <form>
                    <label>
                        <input type="text" placeholder="Título" className='input_text2'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Escribe algo..." className='input_text2'/>
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