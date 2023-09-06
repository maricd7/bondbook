import React from 'react'
import DashNav from '../components/DashNav/DashNav'
import MyContacts from '../components/Dash/MyContacts'
import CreateContact from '../components/Dash/CreateContact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Created from '../components/Action PopUps/CreatedModal';

function UserDashboard() {
  
  return (
    <div className='bg-gray-50	 h-screen flex justify-center '>
     {/* <DashNav/> */}
      
     <MyContacts />
     
     <span></span>
    </div>
  )
}

export default UserDashboard
