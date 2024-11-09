import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState } from 'react'
import OrderConfirm from './pages/OrderConfirm'
import FilterData from './pages/FilterData'
import Fashion from './components/Fashion'
import HomeAppliances from './components/HomeAppliances'
import Beauty from './components/Beauty'
import Electronics from './components/Electronics'
import Toys from './components/Toys'

function App() {
  const [order, setOrder] = useState(null)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder} />}></Route>
        <Route path='/order-confirm' element={<OrderConfirm order={order} />}></Route>
        <Route path='/filter-data' element={<FilterData/>}></Route>
        <Route path='/category/fashion' element={<Fashion/>}></Route>
        <Route path='/category/home' element={<HomeAppliances/>}></Route>
        <Route path='/category/beauty' element={<Beauty/>}></Route>
        <Route path='/category/electronics' element={<Electronics/>}></Route>
        <Route path='/category/toys' element={<Toys/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
