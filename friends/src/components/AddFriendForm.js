import React from 'react';

import useInput from '../hooks/useInput';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriendForm = props => {

  const [name, setName, handleName] = useInput('');
  const [age, setAge, handleAge] = useInput('');
  const [email, setEmail, handleEmail] = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
    setName(name);
    setAge(age);
    setEmail(email);
    axiosWithAuth()
    .post('/api/friends', {name, age, email})
      .then(response => {
        console.log(response);
        props.history.push('/friends');

      })
      .catch(error => {
        console.log(error);
      })
  }

  return (  
    <form onSubmit={handleSubmit}>
      <input 
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={event => handleName(event.target.value)}
      />
      <input 
        name='age'
        type='text'
        placeholder='Age'
        value={age}
        onChange={event => handleAge(event.target.value)}
      />
      <input 
        name='email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={event => handleEmail(event.target.value)}
      />
      <button>Add</button>
    </form>
  )
} 

export default AddFriendForm;