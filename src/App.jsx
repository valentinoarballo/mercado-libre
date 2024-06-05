import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-red-500'>
        aaaaaaaa
      </div>
    </>
  )
}

export default App
