import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./assets/normalize.css"
import { store } from "./app/store"
import { Provider } from 'react-redux'

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
)

