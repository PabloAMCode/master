import './Login.css';
import './Styles.css';
import {useState} from 'react';

function Registrarse() {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState();
    const [correo, setCorreo] = useState();

      function usuarioChng () {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: usuario,  email: correo, password: contraseña})
        };

        fetch('http://localhost:8080/add', requestOptions)
        .then(response => response.json());

      }

      const handleData = event => {
        setUsuario(event.target.value);
        console.log(event.target.value);
      }
      const handleData2 = event => {
        setContraseña(event.target.value);
        console.log(event.target.value);
      }
      const handleData3 = event => {
        setCorreo(event.target.value);
        console.log(event.target.value);
      }

    return(
        <div className='login'>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Usuario" onChange={handleData}  className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Contraseña" onChange={handleData2} className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Correo" onChange={handleData3} className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <input type="button" value="Registrarse" onClick={usuarioChng} className='buttons'/>
            </div>

        </div>
    )
}

export default Registrarse;