import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../NavBar'

function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.localStorage.getItem('Token')) {
          return (
            <NavBar>
              <Component {...props} />
            </NavBar>
          )
        }
        return <Redirect to='/' />
      }
      }
    />
  )
}

export default PrivateRoute
