import React, {useState, useEffect} from 'react'
import Hilo from './Hilo';
import { useParams } from 'react-router-dom';

import './Login.css';

function TrueHilo() {

  const urlParams = useParams();

  function goToCrearHilo() {
    window.location.href = "/crearhilo/"+urlParams.id;

  }
    const [users, setUsers] = useState();
      
    const getApiData = async () => {
        const response = await fetch('http://localhost:8080/threads/'+urlParams.id).then((response) => response.json());
      
        // update the state
        setUsers(response);
    };

    useEffect(() => {getApiData();}, []);


  return (
    <div className='login'>
      <h1 className='text'>Hilos</h1>
      <input type="button" value="Crear Hilo" onClick={() => goToCrearHilo()} className='buttons'/>
      {users && users.map(
        user => <div key={user.id}>
                  <Hilo data={user}/>
                </div>
      )}
      
    </div>
  )
}

export default TrueHilo