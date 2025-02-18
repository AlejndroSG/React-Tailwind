import React, { useEffect, useState } from 'react'

const Home = () => {
  const [productos, setProductos] = useState([]);
    useEffect( () => {
      fetch(`https://dummyjson.com/products`)
      .then(respuesta => respuesta.json())
      .then(datos => setProductos(datos.products));
    }, []);
    console.log(productos);
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {productos.map(producto =>(
            producto.id <= 10 ?
            <div className='bg-white p-5 rounded-lg shadow-md' key={producto.id} >
                <img src={producto.images[0]} alt="" />
                <h2>{producto.title}</h2>
                <p>{producto.description}</p>
                {/* <button className='p-5 bg-amber-400 rounded-2xl mt-5' ><Link to={`${producto.id}`}>Ver mas</Link></button> */}
                {console.log(producto)}
            </div>
            : null
        ))}
      </div>
    </>
  )
}

export default Home