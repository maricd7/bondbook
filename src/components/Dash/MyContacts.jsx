import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function MyContacts() {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);

    if (savedContacts.length !== 0) {
      setShowContacts(true);
    } else {
      setShowContacts(false);
    }
  }, []);

  return (
    <div className='flex-col flex justify-center items-center w-[720px]'>
      <h1 className='text-4xl text-white font-bold mt-8'>My Contacts</h1>
      <div className='bg-opacity-30 backdrop-blur-md bg-slate-400 w-full max-w-xl h-[720px] mt-16 rounded-lg relative p-8'>
        {!showContacts && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h2 className='text-white text-2xl font-bold'>
              You currently don't have any contacts saved.
            </h2>
            <h4 className='text-gray-200 text-lg mt-2'>
              You can start your Bondbook right now!
            </h4>
            <Link to='/components/Dash/CreateContact'>
              <button className='mt-4 text-white font-bold bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-8 py-2 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
                Create Contact
              </button>
            </Link>
          </div>
        )}
        {showContacts && (
          <div className='text-white mt-8 text-lg'>
            {contacts.map((contact, index) => (
              <div key={index} className='border border-gray-300 p-4 mb-4 rounded-md'>
                <div className='flex flex-col mb-2'>
                  <div className='flex items-center mb-1'>
                    <Icon icon='basil:user-solid' className='text-2xl text-blue-500 mr-2' />
                    <span className='font-semibold'>{contact.name}</span>
                  </div>
                  <div className='flex items-center mb-1'>
                    <Icon icon='basil:gmail-solid' className='text-2xl text-green-500 mr-2' />
                    <span>{contact.email}</span>
                  </div>
                  <div className='flex items-center'>
                    <Icon icon='basil:phone-solid' className='text-2xl text-yellow-500 mr-2' />
                    <span>{contact.number}</span>
                  </div>
                </div>
              </div>
            ))}
            <Link to='/components/Dash/CreateContact'>
          <button className='absolute left-0 bottom-0 w-full bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-8 py-2 rounded-lg text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
            Create Contact
          </button>
        </Link>
          </div>
          
        )}
        
      </div>
    </div>
  );
}

export default MyContacts;









