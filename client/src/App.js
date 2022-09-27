import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/login'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoutes'
import Clients from './components/Clients'
import Attendance from './components/Attendance'
import Trainer from './components/Trainer'
import Payment from './components/Payment'
import Companies from './components/companies'
import AddCompany from './components/companies/AddCompany'
import NotFound from './components/ResultsPages/404notFound'
import { URLS } from './constants/UrlsConfig'

function App (props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path={URLS.homePage} component={HomePage} />
        <PrivateRoute exact path='/companies' component={Companies} />
        <PrivateRoute exact path='/clients' component={Clients} />
        <PrivateRoute exact path='/trainer' component={Trainer} />
        <PrivateRoute exact path='/attendance' component={Attendance} />
        <PrivateRoute exact path='/payment' component={Payment} />
        <PrivateRoute exact path={URLS.addCompany} component={AddCompany} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
