import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-500 via-black to-black h-screen flex justify-center'>
      <div className='flex-col flex justify-center items-center'>
        <h1 className='text-4xl text-white font-bold mt-8'>Create Contact</h1>
        <div className='bg-opacity-30 backdrop-blur-md bg-slate-400 w-[1200px] h-[720px] mt-16 rounded-lg items-center flex flex-col justify-center'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className=' ml-8 text-white'>Enter Name</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full'
                type='text'
                name='name'
                placeholder='Name'
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </div>
            <div className='flex flex-col'>
              <label className='mt-8 ml-8 text-white'>Enter Number</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full'
                type='number'
                name='number'
                placeholder='Number'
                value={contact.number}
                onChange={(e) => setContact({ ...contact, number: e.target.value })}
              />
            </div>
            <div className='flex flex-col'>
              <label className='mt-8 ml-8 text-white'>Enter Email</label>
              <input
                className='mt-4 ml-8 rounded-md px-8 py-4 max-w-lg min-w-full'
                type='email'
                name='email'
                placeholder='Email'
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </div>
            <button className='mt-8 text-white font-bold text-center min-w-lg w-full ml-8 bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-16 py-4 rounded-lg'>
              Create Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyContacts;

