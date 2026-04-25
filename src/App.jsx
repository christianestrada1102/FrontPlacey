import Home from './components/pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Create from './components/pages/Create'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}