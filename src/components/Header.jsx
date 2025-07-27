import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Github, Menu, X} from 'lucide-react'
import logo from '/favicon.svg'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div>
      <nav className="h-[70px] bg-zinc-950 flex items-center text-white text-lg px-8 relative">
  {/* Left: Logo */}
  <div className="flex items-center flex-shrink-0 cursor-pointer">
    <img className="h-8 w-8" src={logo} alt="" />
    <h1 className="text-xl font-bold ml-2">AltCheck</h1>
  </div>


  {/* Right: GitHub Icon & Hamburger */}
  <div className="ml-auto flex items-center">
    {/* Hamburger menu for mobile */}
    <button
      className="md:hidden mr-2"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label="Toggle navigation menu"
    >
      {mobileOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
    <a
    href="https://github.com/kanak227/AltCheck"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Repository"
  >
    <Github size={24} className="text-white cursor-pointer hover:text-blue-500 transition-all ease-in-out" />
    </a>
  </div>
</nav>

{/* Mobile Menu */}
{mobileOpen && (
  <div className="md:hidden bg-zinc-950 text-white px-8 py-4 flex flex-col gap-4 shadow-lg z-50 absolute w-full left-0">
    <Link
      to="/"
      className="hover:text-blue-500 transition-all ease-in-out"
      onClick={() => setMobileOpen(false)}
    >
      Home
    </Link>
    <Link
      to="/about"
      className="hover:text-blue-500 transition-all ease-in-out"
      onClick={() => setMobileOpen(false)}
    >
      About
    </Link>
  </div>
)}
    </div>
  )
}

export default Header
