import HomePage from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import './App.css'
import { Route, Routes} from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
