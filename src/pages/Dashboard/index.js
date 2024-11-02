import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Todo from './Todo/Todo'
export default function index() {
  return (
    <>
      <Routes>
        
        <Route path='home' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>
  )
}
