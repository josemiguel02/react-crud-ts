import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CamerasProvider from './context/CamerasProvider'

ReactDOM.render(
  <CamerasProvider>
    <App />
  </CamerasProvider>,
  document.getElementById('root')
)
