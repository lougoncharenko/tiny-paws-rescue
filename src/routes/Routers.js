import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Dogs from '../pages/Dogs';
import DogDetails from '../pages/DogDetails';
import Contact from '../pages/Contact';
import Involvement from '../pages/Involvement';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element ={<Navigate to='/home' />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dogs" element={<Dogs/>} />
        <Route path="dogs/:id" element={<DogDetails />} />
        <Route path="involvement" element={<Involvement/>} />
        <Route path="contact" element={<Contact/>} />
    </Routes>
  );
}

export default Routers;
