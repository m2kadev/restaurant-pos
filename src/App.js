import './App.css'
import Main from './components/main/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='*' 
          element={
          <ProtectedRoutes>
            <Main />
          </ProtectedRoutes>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
