import Home from './components/pages/Home'
import {Routes,Route,Link} from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import ProtectedRoute from './components/organism/protectedRoute'
import Users from './components/pages/Users'
import Create from './components/pages/Create'
import Realtime from './components/pages/Realtime'

export default function App() {
  return (

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Realtime' element={<Realtime />} />

      

        <Route path='/dashboard'
         element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
         }
        />

        <Route path='/users'
         element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
         }
        />
         
      </Routes>

  )
}

