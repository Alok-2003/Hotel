import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/app.scss'
import { FirebaseProvider } from "./context/Firebase.jsx"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

