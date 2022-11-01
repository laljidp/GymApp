import { useContext } from 'react'
import { RootUserContext } from '../context/RootUserContext'

export const useAuth = () => {
  const context = useContext(RootUserContext)
  if (context === undefined) {
    throw new Error(
      'useAuth hooks must used within a AuthProvider component'
    )
  }
  return context
}
