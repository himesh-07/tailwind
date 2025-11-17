import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md fixed top-0 left-0 w-full z-50 h-24">


        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-50 absolute top-5 left-0 size-50 ">CIVIC SOLVE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-amber-50 font-medium absolute top-5 right-126 size-16 ... whitespace-nowrap">
          <li className="hover:text-sky-400 cursor-pointer  hover:bg-amber-50 border border-amber-50  px-5 py-0 flex items-center rounded-xl 
           border-width: 4px; " >HOME </li>
          <li className="hover:text-amber-50 cursor-pointer  hover:bg-sky-400 px-2 py-5 flex items-center ">TRACK REPORT </li>
          
          <li className="hover:text-amber-50 cursor-pointer  hover:bg-sky-400 px-2 py-5  flex items-center ">ABOUT US</li>
          <li className="hover:text-amber-50 cursor-pointer  hover:bg-sky-400 px-2 py-5  flex items-center ">LOGIN</li>
        </ul>

          
      
    </nav>
      
    
  )
}

export default Navbar
