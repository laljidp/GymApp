import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import * as serviceWorker from './serviceWorker'
import RootUserProvider from './context/RootUserContext'
import { HashRouter } from 'react-router-dom'
import { storageKeys } from './constants/UrlsConfig'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${window.localStorage.getItem(storageKeys.token)}`
  },
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${window.localStorage.getItem(storageKeys.token)}`
      }
    })
  },
  onError: (error) => {
    const [err,] = error?.graphQLErrors || []
    if (
      err && (err?.message?.toLowerCase()?.includes('invalid signature') ||
        err?.message?.toLowerCase()?.includes('invalid token') ||
        err?.message?.toLowerCase()?.includes('jwt expired')
      )
    ) {
      console.log('Logout the user')
      window.localStorage.removeItem(storageKeys.token)
      window.localStorage.removeItem(storageKeys.isAuthenticated)
      window.localStorage.removeItem(storageKeys.user)
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootUserProvider>
      <HashRouter
        basename={'/'}
      >
        <App />

      </HashRouter>
    </RootUserProvider>
  </ApolloProvider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
