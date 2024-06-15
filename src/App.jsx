import { useState } from 'react'
import './App.css'
import ShoppingCart from './componets/ShoppingCart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart></ShoppingCart>
    </>
  )
}

export default App
