import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = props => {
  const [ friends, setFriends ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    
    getFriends();

  }, []);

  const getFriends = () => {
    setLoading(true);
    axiosWithAuth()
    .get('/api/friends')
      .then(response => {
        console.log(response);
        setFriends(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }

  const handleClick = () => {
    props.history.push('./add');
  }

  const handleDelete = friend => {
    axiosWithAuth()
    .delete(`/api/friends/${friend.id}`)
      .then(response => {
        console.log(response);
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <>
      <h1>List of Friends</h1>
      {loading ? 
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
        : ''
      }
      <button onClick={handleClick}>Add Friend</button>
      <div>
        {friends.map(friend => {
          return (
            <Friend key={friend.id} friend={friend} handleDelete={handleDelete} />
          ) 
        })}
      </div>
    </>
  )
  
}

export default FriendsList;