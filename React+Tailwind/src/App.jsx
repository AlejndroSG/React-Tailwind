import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Plantilla from './layout/Plantilla'
import Productos from './pages/Productos'
import Detalles from './pages/Detalles'
import Contacto from './pages/Contacto'
import Error from './pages/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/productos' element={<Productos/>}></Route>
            <Route path='productos/:id' element={<Detalles/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
