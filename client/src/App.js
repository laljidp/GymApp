import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/login'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoutes'
import Attendance from './components/Attendance'
import Payment from './components/Payment'
import AddCompany from './components/Companies/AddCompany'
import NotFound from './components/ResultsPages/404notFound'
import { URLS } from './constants/UrlsConfig'
import ViewCompanyInfo from './components/Companies/ViewCompanyInfo'
import PageLoader from './components/UI/PageLoader'

const Companies = React.lazy(() => import('./components/Companies'));
const UsersPage = React.lazy(() => import('./components/Users'));
const AddEditUser = React.lazy(() => import('./components/Users/AddEditUser'));

function App(props) {
  return (
    <Suspense fallback={<PageLoader />}>
      <HashRouter
        basename='/'
      >
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path={URLS.homePage} component={HomePage} />
          <PrivateRoute exact path={URLS.companiesListing} component={Companies} />
          <PrivateRoute exact path={URLS.viewCompanyInfo} component={ViewCompanyInfo} />
          <PrivateRoute exact path={URLS.usersPage} component={UsersPage} />
          <PrivateRoute exact path={URLS.addUserPage} component={AddEditUser} />
          <PrivateRoute exact path='/attendance' component={Attendance} />
          <PrivateRoute exact path='/payment' component={Payment} />
          <PrivateRoute exact path={URLS.addCompany} component={AddCompany} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter >
    </Suspense>

  )
}

export default App
