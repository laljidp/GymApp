import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${window.localStorage.getItem('Token')}`
  },
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('Token')}`
      }
    })
  },
  onError: (error) => {
    const [err,] = error.graphQLErrors
    if (err && (err?.message?.toLowerCase()?.includes('invalid signature') ||
      err?.message?.toLowerCase()?.includes('invalid token')
    )
    ) {
      console.log('Logout the user')
      localStorage.removeItem('Token')
      window.location.href = '/'
    }
    console.log('error ', error.graphQLErrors)
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter
      basename={'/'}
    >
      <App />

    </HashRouter>
  </ApolloProvider>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
