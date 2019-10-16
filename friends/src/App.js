import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} />
      <PrivateRoute path='/add' component={AddFriendForm} />
    </div>
  );
}

export default App;
