import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickApp } from './components/RickApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickApp />
  </StrictMode>,
)
