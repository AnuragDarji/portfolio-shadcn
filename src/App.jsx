import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Layout from './Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <Router>
      <AppRoutes/>
    </Router>
  )
}

export default App
