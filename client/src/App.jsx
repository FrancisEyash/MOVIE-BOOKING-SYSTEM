import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/movies' element = {<Movies/>}/>
        <Route path='/movies/:id' element = {<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element ={<SeatLayout/>}/>
        <Route path='/my-bookings' element = {<MyBookings/>}/>
        <Route path='/favorite' element = {<Favorite/>}/>
      </Routes>
    </>
  )
}

export default App
