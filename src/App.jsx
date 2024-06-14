import { useState } from 'react'
import './App.css'
import ProductDetail from './componets/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductDetail itemId={"MLA1419176385"}></ProductDetail>
    </>
  )
}

export default App
