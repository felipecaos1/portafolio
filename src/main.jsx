import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { PortfolioApp } from './PortfolioApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/portafolio'>
      <PortfolioApp/>
    </BrowserRouter>
  </React.StrictMode>
)
