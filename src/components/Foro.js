import React, {useState, useEffect} from 'react'
import './Login.css';
import Threads from './Threads';

function Foro() {
  const [users, setUsers] = useState();
    const getApiData = async () => {
        const response = await fetch('http://localhost:8080/getUsers').then((response) => response.json());
      
        // update the state
        setUsers(response);
    };

    useEffect(() => {getApiData();}, []);

  return (
      <div className='login'>
        <h1 className='text'>Threads</h1>
        {users && users.map(
        user => <div key={user.id}>
                  <Threads data={user}/>
                </div>
      )}
      </div>
  )
}

export default Foro