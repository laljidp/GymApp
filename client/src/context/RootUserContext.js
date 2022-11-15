import React, { useEffect, useState } from "react";
import { storageKeys } from "../constants/UrlsConfig";

export const RootUserContext = React.createContext({
  user: '',
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  setUser: () => { },
  logout: () => { }
})

export default function (props) {
  const isAuthenticatedPrev = window.localStorage.getItem(storageKeys.isAuthenticated) || false;
  const prevUser = JSON.parse(window.localStorage.getItem(storageKeys.user || '')) || null

  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedPrev)
  const [user, setUser] = useState(prevUser)

  const logout = () => {    
    window.localStorage.removeItem(storageKeys.isAuthenticated)
    window.localStorage.removeItem(storageKeys.user)
    window.localStorage.removeItem(storageKeys.token)
    setIsAuthenticated(false)
    setUser(null)
  }

  useEffect(() => {
    window.localStorage.setItem(storageKeys.isAuthenticated, isAuthenticated)
    window.localStorage.setItem(storageKeys.user, JSON.stringify(user))
    window.localStorage.setItem(storageKeys.token, user?.token || null)    
  }, [user, isAuthenticated])

  const defaultContext = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    logout
  }

  return (
    <RootUserContext.Provider value={defaultContext}>
      {props.children}
    </RootUserContext.Provider>
  )
}

