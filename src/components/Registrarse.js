import './Login.css';
import './Styles.css';

function Registrarse() {
    
      function registrarse() {
        console.log("Registrarse");
      }

    return(
        <div className='login'>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Usuario" className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Contraseña" className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Correo" className='input_text'/>
                    </label>
                </form>
            </div>
            <div>
                <input type="button" value="Registrarse" onClick={registrarse} className='buttons'/>
            </div>

        </div>
    )
}

export default Registrarse;