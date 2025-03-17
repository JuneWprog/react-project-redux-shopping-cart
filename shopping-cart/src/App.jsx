import {Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header'
import Counter from './pages/counter'
import Products from './pages/products'


function App() {
  return (
    <div className="App content-center">
    <div className="margin-auto max-w-7xl">
      
      <Routes>
        <Route path="/" element={
          <><Header/> <Products /></>} />
        <Route path="/cart" element={<><Header/> <Cart /></>} />
        <Route path="/counter" element={<><Header/> <Counter /></>} />
        <Route path="/products" element={<><Header/> <Products /></>} />
        <Route path="*" element={<h1>404 The page is not Found</h1>} />
      </Routes>
     
     
    </div>
    </div>
  )
}

export default App
