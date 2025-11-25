import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Books from './pages/Books'
import Categories from './pages/Categories'
import Authors from './pages/Authors'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App(){
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/authors' element={<Authors/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </>
  )
}