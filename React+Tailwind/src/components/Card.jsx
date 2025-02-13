import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({productos}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {productos.map(producto =>(
            <div className='bg-white p-5 rounded-lg shadow-md' key={producto.id} >
                <img src={producto.images[0]} alt="" />
                <h2>{producto.title}</h2>
                <p>{producto.description}</p>
                <button className='p-5 bg-amber-400 rounded-2xl mt-5' ><Link to={`${producto.id}`}>Ver mas</Link></button>
            </div>
        ))}
    </div>
  )
}

export default Card