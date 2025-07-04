import React from 'react'
import {Link} from 'react-router-dom'
import {Github} from 'lucide-react'

const Header = () => {
  return (
    <div>
      <nav className="h-[70px] bg-zinc-950 flex items-center text-white text-lg px-8 relative">
  {/* Left: Logo */}
  <div className="flex items-center flex-shrink-0 cursor-pointer">
    <img className="h-8 w-8" src="../public/favicon.svg" alt="" />
    <h1 className="text-xl font-bold ml-2">AltCheck</h1>
  </div>

  {/* Center: Nav Items */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
    <Link to="/" className="hover:text-blue-500 transition-all ease-in-out">Home</Link>
    <Link to="/about" className="hover:text-blue-500 transition-all ease-in-out">About</Link>
  </div>

  {/* Right: GitHub Icon */}
  <div className="ml-auto flex items-center">
    <Github size={24} className="text-white cursor-pointer hover:text-blue-500 transition-all ease-in-out" />
  </div>
</nav>
    </div>
  )
}

export default Header
