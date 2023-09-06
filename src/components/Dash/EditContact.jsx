import React, { useEffect, useState } from 'react';

function EditContact({ toggleModal, updateContacts, contactEditedModal }) {
  let contactToEdit = JSON.parse(localStorage.getItem('itemToEdit'));

  const [editedName, setEditedName] = useState(contactToEdit[0].name);
  const [editedEmail, setEditedEmail] = useState(contactToEdit[0].email);
  const [editedNumber, setEditedNumber] = useState(contactToEdit[0].number);

  function handleEditName(event) {
    setEditedName(event.target.value);
  }

  function handleEditEmail(event) {
    setEditedEmail(event.target.value);
  }

  function handleEditNumber(event) {
    setEditedNumber(event.target.value);
  }

  useEffect(() => {
    console.log('Edited Name:', editedName);
    console.log('Edited Email:', editedEmail);
    console.log('Edited Number:', editedNumber);
  }, [editedName, editedEmail, editedNumber]);

  function saveChanges() {
    let savedContacts = JSON.parse(localStorage.getItem('contacts'));
    const index = savedContacts.findIndex((contact) => contact === contactToEdit[0]);

    savedContacts[index] = {
      ...savedContacts[index],
      name: editedName,
      email: editedEmail,
      number: editedNumber,
    };
    savedContacts.push(savedContacts[index])
    localStorage.setItem('contacts', JSON.stringify(savedContacts));
    toggleModal();
    localStorage.removeItem('itemToEdit')
    updateContacts(savedContacts);
  }

  return (
    <div className='p-24 bg-opacity-30 border-2 w-[480px] h-[640px] bg-white text-slate-700 absolute z-40 rounded-md'>
      
      <h4 className='mt-4 ml-4 font-bold text-slate-700 text-2xl'>Edit Contact</h4>
      <div>
        <input
          className='mt-4  rounded-md px-8 py-4 max-w-lg min-w-full'
          type='text'
          name='name'
          placeholder='Name'
          value={editedName}
          onChange={handleEditName}
        />
      </div>
      <div>
        <input
          className='mt-4  rounded-md px-8 py-4 max-w-lg min-w-full'
          type='email'
          name='email'
          placeholder='Email'
          value={editedEmail}
          onChange={handleEditEmail}
        />
      </div>
      <div>
        <input
          className='mt-4  rounded-md px-8 py-4 max-w-lg min-w-full'
          type='tel'
          name='number'
          placeholder='Number'
          value={editedNumber}
          onChange={handleEditNumber}
        />
      </div>
      <button
        onClick={()=>{
          saveChanges(); 
          contactEditedModal();
        }}
        
        className='absolute left-0 bottom-0 w-full bg-gradient-to-r from-[rgba(71,101,255,0.8)] to-[rgba(0,209,255,0.64)] px-8 py-2 rounded-lg text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'>
        Save changes
      </button>
    </div>
  );
}

export default EditContact;



