import React from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-indigo-700 p-5 text-white flex items-center justify-between'>
      <div>
        <img className='w-[100px]' src={logo}/>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header