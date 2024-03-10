import './App.css'
import Login from './components/Login';
import Verify from './components/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OTP from './components/otp';
import Catering from './components/Catering';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Requirement from './components/Requirement';
import Hotels from './components/Hotels';
import Gatherings from './components/Gatherings';
import React from 'react';
function App() {

  return (
    <>
      {/* <Nav /> */}
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} > </Route>
          <Route path='/otp' element={<OTP />} > </Route>
          <Route path='/requirement' element={<Requirement />} > </Route>
          <Route path='/gathering' element={<Gatherings />} > </Route>

          <Route path='/catering' element={<Catering />} > </Route>
          <Route path='/verify' element={<Verify />} > </Route>
          <Route path='/hotels' element={<Hotels />} > </Route>

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
