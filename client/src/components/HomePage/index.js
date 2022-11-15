import React from 'react'
import { ROLES } from '../../constants/rolesConfig'
import { useAuth } from '../../Hooks/userAuthHook'
import OwnerUserHP from './OwnerUserHP'
import SuperAdminHP from './SuperAminHP'

function HomePage(props) {

  const { user } = useAuth()

  const renderHomePage = () => {
    switch (user.role) {
      case ROLES.SUPER_ADMIN:
        return <SuperAdminHP />
      case ROLES.SUBSCRIBER:
        return <h2>Subscriber HP</h2>
      case ROLES.OWNER:
        return <OwnerUserHP />
      case ROLES.TRAINER:
        return <h2>Trainer HP</h2>
      default:
        return <h2>Page is not ready yet...</h2>
    }
  }

  return (
    <React.Fragment>
      {renderHomePage()}
    </React.Fragment>
  )
}

export default HomePage
