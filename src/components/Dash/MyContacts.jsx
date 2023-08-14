import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='flex-col flex justify-center items-center'>
      <h1 className='text-4xl text-white font-bold mt-8'>My Contacts</h1>
      <div className='bg-opacity-30 backdrop-blur-md bg-slate-400 w-[1200px] h-[720px] mt-16 rounded-lg'>
        {!showContacts && (
          <div className='flex justify-center items-center flex-col h-full'>
            <h2 className='text-white text-4xl font-bold'>
              You currently don't have any contacts saved.
            </h2>
            <h4 className='text-gray-200 text-2xl mt-4'>
              You can start your Bondbook right now!
            </h4>
            <Link to='/components/Dash/CreateContact'>
              <button className='relative bottom-0 bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-24 py-8 rounded-lg mt-12 text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
                Create Contact
              </button>
            </Link>
          </div>
        )}
        {showContacts && (
          <div className='text-white'>
            {contacts.map((contact, index) => (
              <div key={index}>{contact.name}</div>
            ))}
          </div>
          
        )}
         <Link to='/components/Dash/CreateContact'>
              <button className='relative bottom-0 bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-24 py-8 rounded-lg mt-12 text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
                Create Contact
              </button>
            </Link>
      </div>
    </div>
  );
}

export default MyContacts;
