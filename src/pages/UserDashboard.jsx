import React from 'react'
import DashNav from '../components/DashNav/DashNav'
import MyContacts from '../components/Dash/MyContacts'
import CreateContact from '../components/Dash/CreateContact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function UserDashboard() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-500 via-black to-black h-screen flex justify-center '>
     <DashNav/>
    
     <MyContacts/>
     
     <span></span>
    </div>
  )
}

export default UserDashboard
