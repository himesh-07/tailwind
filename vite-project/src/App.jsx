import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className="bg-amber-400 shadow-md fixed top-0 left-0 w-full z-50 h-24">


        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 absolute top-5 left-0 size-50 ">MyLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-fuchsia-500-700 font-medium absolute top-5 right-65 size-16 ...">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

          
      
    </nav>
  

    </>
  )
}

export default App
