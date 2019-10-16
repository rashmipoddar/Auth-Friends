import React from 'react';

const Friend = props => {

  return (
    <>  
      <h1>{props.friend.name}</h1>
      <h2>{props.friend.age}</h2>
      <h2>{props.friend.email}</h2>
      <button>Edit</button>
      <button onClick={() => props.handleDelete(props.friend)}>Delete</button>
    </>
  )
}

export default Friend;