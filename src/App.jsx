import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Verify from './components/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OTP from './components/otp';
import Marriage from './components/marriage';
import Catering from './components/Catering';
import BirthdayParty from './components/BirthdayParty';
import Party from './components/Party';
import PersonalStay from './components/personalStay';
import Confrence from './components/Conference';
import Anniversary from './components/anniversary';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Requirement from './components/Requirement';
import Hotels from './components/hotels';
import Conference from './components/Conference';
import Gatherings from './components/Gatherings';

function App() {

  return (
    <>
      {/* <Nav /> */}
      <Router>
        <Nav/>
        <Routes>
          {/* <Route path='/' element={} > </Route> */}
          <Route path='/' element={<Login />} > </Route>
          <Route path='/otp' element={<OTP />} > </Route>
          <Route path='/requirement' element={<Requirement />} > </Route>
          <Route path='/gathering' element={<Gatherings />} > </Route>
          
          {/* <Route path='/marriage' element={<Marriage />} > </Route>
          <Route path='/birthdayParty' element={<BirthdayParty />} > </Route>
          <Route path='/party' element={<Party />} > </Route>
          <Route path='/personalStay' element={<PersonalStay />} > </Route>
          <Route path='/conference' element={<Conference />} > </Route>
          <Route path='/anniversary' element={<Anniversary />} > </Route>
          <Route path='/verify' element={<Verify />} > </Route>
          <Route path='/catering' element={<Catering />} > </Route>
          <Route path='/hotels' element={<Hotels />} > </Route> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
