import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Detalles = () => {
  const {id} = useParams();
  console.log(id);
  const [producto, setProducto] = useState([]);
  
  useEffect( () => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(respuesta => respuesta.json())
    .then(datos => setProducto(datos));
  }, []);
  console.log(producto);
  return (
    <>
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
    </>
  )
}

export default Detalles