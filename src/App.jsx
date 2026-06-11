import HomePage from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/CheckoutPage.jsx'
import { OrderPage } from './pages/OrderPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import './App.css'
import { Route, Routes} from 'react-router'

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
