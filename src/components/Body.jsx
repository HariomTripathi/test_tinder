import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUserData } from '../utils/userReducer'

const Body = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        userpreivew()
    },[])
    const userpreivew=async()=>{
        try{
       const res=await axios.get("http://localhost:3000/profile",{withCredentials:true})
          
        dispatch(addUserData(res));
          
    }
    catch (e){
        // e.status(401).message(e.m)
        console.log(e)
    }
    }
  return (
    <div className='h-[80vh]'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body