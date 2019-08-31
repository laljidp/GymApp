import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/login'
import 'antd/dist/antd.css'
import Dashboard from './components/Dashboard/'
import PrivateRoute from './components/PrivateRoutes'
import Clients from './components/Clients'
import Attendance from './components/Attendance'
import Payment from './components/Payment'
import NotFound from './components/ResultsPages/404notFound'

function App (props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/clients' component={Clients} />
        <PrivateRoute exact path='/attendance' component={Attendance} />
        <PrivateRoute exact path='/payment' component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
