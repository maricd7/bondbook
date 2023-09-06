import React, { useState, useEffect } from 'react';

function Search({ contacts, setContacts }) {
  
  return (
    <div className="w-full">
      <input
        className="pt-4 pb-4 pl-8 pr-8 w-96 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        placeholder="Search Contacts by Name"
        type="text"
      
      />
    </div>
  );
}

export default Search;


