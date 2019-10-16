import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component : Component, ...rest }) => {
  // We are destructuring component from props and then renaming it to Component
  // const Component = props.component
  // ...rest is just passing all other props properties to the rest object

  return (
    <Route
      {...rest}   
      render={props => {
        // console.log('The remaining props are', {...rest});
        // console.log('props from Private Route is ', props);
        if(localStorage.getItem('token')) {
          return <Component {...props} />
        } else {
          return <Redirect to='/login' />
        }
      }} 
    />
  )
}

export default PrivateRoute;