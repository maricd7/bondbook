import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import EditContact from './EditContact';
import Search from '../Search/Search';
import Created from '../Action PopUps/CreatedModal';
import EditedModal from '../Action PopUps/EditedModal';
import DeletedModal from '../Action PopUps/DeletedModal';

function MyContacts() {
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);

    if (savedContacts.length !== 0) {
      setShowContacts(true);
    } else {
      setShowContacts(false);
    }
  }, []);

  //DELETE CONTACT

  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    contactDeletedModal()
    if(updateContacts.length <= 0){
      setShowContacts(false)
    }
  }

  //EDIT CONTACT

  function openModal(index) {
    let filtered = contacts.filter((_, i) => i === index);
    let rest = contacts.filter((_, i) => i !== index);

    localStorage.setItem('contacts', JSON.stringify(rest));
    localStorage.setItem('itemToEdit', JSON.stringify(filtered));
    setEditModal(true);
  }

  function updateContacts(updatedContacts) {
    setContacts(updatedContacts);
    setEditModal(false); // Close the modal after updating contacts
  }

//  CONTACT EDITED MODAL 

  const[editedModal, toggleEditedModal] = useState(false)
  function contactEditedModal(){

    toggleEditedModal(true)
    setTimeout(function() {
      toggleEditedModal(false);
    }, 3000);
  }

//  CONTACT DELETED MODAL 
  const[deletedModal, toggleDeletedModal] = useState(false)
  function contactDeletedModal(){

    toggleDeletedModal(true)
    setTimeout(function() {
      toggleDeletedModal(false);
    }, 3000);
   }

  return (
  
    <div className='flex-col flex justify-center items-center w-full'>

      {editModal && <EditContact toggleModal={() => setEditModal(false)} updateContacts={updateContacts}  contactEditedModal={contactEditedModal}/>}
      {editedModal && <EditedModal />}
      {deletedModal && <DeletedModal/>}

      <h1 className='text-4xl text-slate-700 font-bold mt-8'>My Contacts</h1>
     
      <div className='bg-opacity-30  w-full  h-[720px] mt-16 rounded-lg relative p-8 z-10'>
      <Search contacts={contacts} setContacts={setContacts}  />
        {!showContacts && (
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center'>
            <h4 className='font-bold text-4xl text-slate-700 w-[440px]'>You currently don't have any contacts.</h4>
            <Icon icon="twemoji:sad-but-relieved-face" className='w-32 h-32 mt-8'/>


          </div>
        )}
        {showContacts && (
          <div className='text-slate-700 mt-8 text-lg flex flex-wrap gap-8'>
            {contacts.map((contact, index) => (
              <div key={index} className='border border-gray-300 p-4 mb-4 rounded-md w-96 relative'>
                <div className='flex flex-col gap-4 absolute right-16'>
                  <Icon
                    icon='basil:trash-alt-solid'
                    className='w-8 h-8 right-12 text-red-500'
                    onClick={() => {
                      deleteContact(index);
                     
                    }}
                  />
                  <Icon
                    icon='basil:edit-alt-solid'
                    className='w-8 h-8 right-12 text-slate-700'
                    onClick={() => {
                      openModal(index);
                      
                    }}
                  />
                </div>

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
          </div>
        )}
        <Link to='/components/Dash/CreateContact'>
          <button className='absolute left-0 bottom-0 w-96 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-8 py-2 rounded-lg text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
            Create Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MyContacts;












