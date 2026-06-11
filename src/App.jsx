import HomePage from './pages/HomePage.jsx'
import './App.css'
import { Route, Routes} from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="checkout" element={<h1>Checkout Page</h1>} />
    </Routes>
  )
}

export default App
