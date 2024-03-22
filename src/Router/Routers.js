import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import SearchDetails from '../pages/SearchResultList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ThankYou from '../pages/ThankYou';
import ImageGallery from '../Image-Gallery/ImageGallery';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>} />
        <Route path='/home' element={<Home/>}/> 
        <Route path='/tours' element={<Tours/>}/> 
        <Route path='/tours/:id' element={<TourDetails/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/thankyou' element={<ThankYou/>}/> 
        <Route path='/tours/search' element={<SearchDetails/>}/> 
        <Route path='/imageGallery' element={<ImageGallery/>}/> 

    </Routes>
  )
}

export default Routers