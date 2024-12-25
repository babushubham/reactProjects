import { useState } from 'react'
import Card from './card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className= 'bg-green-400 text-black p-4 rounded xl mb-1'>Tailwind test</h1>
      <Card/>
      <Card/>
    </>
  )
}

export default App
