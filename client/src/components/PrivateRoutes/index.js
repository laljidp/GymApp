import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import MenuAppBar from '../MenuAppBar'

function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.localStorage.getItem('Token')) {
          return (
            <div>
              <MenuAppBar />
              <Component {...props} />
            </div>
          )
        }
        return <Redirect to='/' />
      }
      }
    />
  )
}

export default PrivateRoute
