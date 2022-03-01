import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CamerasProvider from './context/CamerasProvider'

ReactDOM.render(
  <React.StrictMode>
    <CamerasProvider>
      <App />
    </CamerasProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
