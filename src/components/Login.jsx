import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserData } from '../utils/userReducer';

const Login =()=>{
    const[email,setEmail]=useState("virath@tcs.com");
    const[password,setPassword]=useState("Vir!@123");
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=async()=>{
        try{
        if(email && password){
            const data={
                "email":email,
                "password":password
            }
        const res=  await axios.post("http://localhost:3000/login",data,{withCredentials:true})
        dispatch(addUserData(res));
        return navigate("/feeds");
    }}
    catch(e){
        console.log(e)
    }
    }
  return (
    <div className='flex flex-col h-[100%] justify-center align-center items-center'>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-[10em] h-[2em] border border-900 rounded-lg" placeholder="email"/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="w-[10em] h-[2em] border-2 border-600 rounded-lg" placeholder="password"/>
        <button onClick={()=>handleSubmit()} className="w-[2.8em] h-[2em] border-2 border-600 rounded-lg">Login</button>
    </div>
  )
}

export default Login