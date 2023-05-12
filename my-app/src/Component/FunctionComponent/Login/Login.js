import React from 'react';
import { useState } from 'react';

  function Login({addData}) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit= (e) => {
      addData([name, password])
      e.preventDefault();
    }
  
    return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Name:</label>
        <br />
        <input 
          name='name' 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          name='password' 
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <input 
          type='submit' 
          value='Submit' 
        />
      </form>
    )
  }

  export default Login;