import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Home/Hero'
import About from './About'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <>
    <Header/>
      <Routes>
        
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
