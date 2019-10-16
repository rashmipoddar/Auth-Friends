import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = props => {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    
    getFriends();

  }, []);

  const getFriends = () => {
    axiosWithAuth()
    .get('/api/friends')
      .then(response => {
        console.log(response);
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleClick = () => {
    props.history.push('./add');
  }

  return (
    <>
      <h1>List of Friends</h1>
      <button onClick={handleClick}>Add Friend</button>
      <div>
        {friends.map(friend => {
          return (
            <Friend key={friend.id} friend={friend} />
          ) 
        })}
      </div>
    </>
  )
  
}

export default FriendsList;