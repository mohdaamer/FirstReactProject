import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function navbar() {
  return (
    <div>
      <div className="navwrapper w-full flex justify-center shadow-lg">
      <nav className="w-[80%] h-[10vh] flex justify-between items-center">
        <div className="logo">
          <img className="cursor-pointer" src="\images\brand_logo.png" alt="" />
        </div>

        <div className="center hidden lg:block">
        <ul className="flex gap-10">
          <li><a className="text-xl font-semibold hover:border-b-2 border-red-500" href="#">Menu</a></li>
          <li><a className="text-xl font-semibold hover:border-b-2 border-red-500" href="#">Location</a></li>
          <li><a className="text-xl font-semibold hover:border-b-2 border-red-500" href="#">About</a></li>
          <li><a className="text-xl font-semibold hover:border-b-2 border-red-500" href="#">Contact</a></li>
        </ul>
        </div>

        <div className="loginbtn hidden lg:block lg:px-6 py-4 text-white cursor-pointer bg-red-500 rounded-lg">
          <a href="#">Log in</a>
        </div>

        <div className="hamburger lg:hidden">
          <MenuIcon />
        </div>
      </nav>
      </div>
    </div>
  )
}

export default navbar
