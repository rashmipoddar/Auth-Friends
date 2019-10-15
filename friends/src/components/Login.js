import React, { useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        props.history.push('/friends');
      })
      .catch(error => {
        console.log(error); 
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default Login;