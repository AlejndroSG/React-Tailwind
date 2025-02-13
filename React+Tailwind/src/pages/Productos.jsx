import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Productos = () => {
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(respuesta => respuesta.json())
    .then(datos => setProductos(datos.products))
  }, []);

  console.log(productos);
  
  return (
    <section>
      <Card productos={productos}/>
    </section>
  )
}

export default Productos