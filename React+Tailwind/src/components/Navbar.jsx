import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='space-x-2 uppercase font-medium'>
      <Link className='enlace' to="/">Home</Link>
      <Link className='enlace' to="/productos">Productos</Link>
      <Link className='enlace' to="/contacto">Contacto</Link>
    </nav>
  )
}

export default Navbar