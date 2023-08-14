import React from 'react'
import Prim_Button from '../Button/Cta'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    
    <div className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-500 via-black to-black absolute h-full w-full m-0 flex justify-center items-center h-screen' >
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-8xl text-white font-bold	'>Your Unified Contact Manager</h1>
            <h2 className='text-xl text-white text-center mt-8'>Streamline Your Connections Seamlessly with BondBook: The Ultimate Contact Management App!</h2>
            <Link to="/pages/UserDashboard">
            <Prim_Button /></Link>
            
        </div>
     
    </div>
  )
}

export default Hero
