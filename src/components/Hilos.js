import React, {useState, useEffect} from 'react'
import Hilo from './Hilo';
import { useNavigate, useParams } from 'react-router-dom';

import './Login.css';

function TrueHilo() {

  const urlParams = useParams();

  console.log(urlParams.id)

    const [users, setUsers] = useState();
      
    const getApiData = async () => {
        const response = await fetch('http://localhost:8080/getUsers').then((response) => response.json());
      
        // update the state
        setUsers(response);
    };

    useEffect(() => {getApiData();}, []);

    
    let navigate = useNavigate();

  return (
    <div className='login'>
      <h1 className='text'>Hilos</h1>
      <input type="button" value="Crear Hilo" onClick={() => {navigate("/CrearHilo")}} className='buttons'/>
      {users && users.map(
        user => <div key={user.id}>
                  <Hilo data={user}/>
                </div>
      )}
      
    </div>
  )
}

export default TrueHilo