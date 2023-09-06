import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Created from '../Action PopUps/CreatedModal';
function MyContacts() {
  const [contact, setContact] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleSubmit = (event) => {
 
    event.preventDefault();
    
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(savedContacts));
    setContact({
      name: '',
      number: '',
      email: '',
    });
 
  };
  //CONTACT CREATED MODAL
  const[createdModal, toggleCreatedModal] = useState(false)
  function contactCreated(){

    toggleCreatedModal(true)
    setTimeout(function() {
      toggleCreatedModal(false);
    }, 3000);
  }
  return (
    <div className='bg-gray-50 h-screen flex justify-center'>
      <div className='flex-col flex justify-center items-center'>
      {createdModal &&  <Created className='z-40'/>}
        <h1 className='text-4xltext-slate-700 font-bold mt-8'>Create Contact</h1>
        <div className='border-2 w-[1200px] h-[720px] mt-16 rounded-lg items-center flex flex-col justify-center'>
        <Link to="/pages/UserDashboard">
        <Icon icon="basil:cross-solid" className='w-12 h-12 absolute text-slate-700 right-12 top-12'/>
        </Link>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className=' ml-8 text-slate-700'>Enter Name</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                type='text'
                name='name'
                placeholder='Name'
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </div>
            <div className='flex flex-col'>
              <label className='mt-8 ml-8 text-slate-700'>Enter Number</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                type='number'
                name='number'
                placeholder='Number'
                value={contact.number}
                onChange={(e) => setContact({ ...contact, number: e.target.value })}
              />
            </div>
            <div className='flex flex-col'>
              <label className='mt-8 ml-8 text-slate-700'>Enter Email</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                type='email'
                name='email'
                placeholder='Email'
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </div>
            <button onClick={()=>contactCreated()} className='mt-8 text-white font-bold text-center min-w-lg w-full ml-8 bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-16 py-4 rounded-lg'>
              Create Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyContacts;

