import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './component/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes/>
    </Router>
  )
}

export default App
