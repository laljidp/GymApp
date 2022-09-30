import React from 'react'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/login'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoutes'
import Clients from './components/Clients'
import Attendance from './components/Attendance'
import Trainer from './components/Trainer'
import Payment from './components/Payment'
import Companies from './components/Companies'
import AddCompany from './components/Companies/AddCompany'
import NotFound from './components/ResultsPages/404notFound'
import { URLS } from './constants/UrlsConfig'
import ViewCompanyInfo from './components/Companies/ViewCompanyInfo'

function App(props) {
  return (
    <HashRouter
      basename='/'
    >
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path={URLS.homePage} component={HomePage} />
        <PrivateRoute exact path='/companies' component={Companies} />
        <PrivateRoute exact path='/companies/:id' component={ViewCompanyInfo} />
        <PrivateRoute exact path='/clients' component={Clients} />
        <PrivateRoute exact path='/trainer' component={Trainer} />
        <PrivateRoute exact path='/attendance' component={Attendance} />
        <PrivateRoute exact path='/payment' component={Payment} />
        <PrivateRoute exact path={URLS.addCompany} component={AddCompany} />

        <Route component={NotFound} />
      </Switch>
    </HashRouter >

  )
}

export default App
