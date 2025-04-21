import React from 'react'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/signin'
import Signup from './pages/signup'
import About from './pages/about'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}
