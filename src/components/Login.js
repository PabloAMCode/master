import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Styles.css';

function Login() {
    let navigate = useNavigate();

    return(
        <div className='login'>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Usuario" className='input_text2'/>
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Contraseña" className='input_text2'/>
                    </label>
                </form>
            </div>
            <div>
                <input type="button" value="Entrar" onClick={() => {navigate("/Foro")}} className='buttons'/>                
            </div>
            <div>
                <input type="button" value="Registrarse" className='buttons' onClick={() => {navigate("/Registrarse")}}/>
            </div>


        </div>
    )
}

export default Login;