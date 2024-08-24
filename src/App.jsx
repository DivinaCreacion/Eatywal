import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Supports weights 100-900
import '@fontsource-variable/saira';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-normal text-blue-500">
        Hello world!
      </h1>
    </>
  )
}

export default App
