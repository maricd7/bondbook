import React, { useState, useEffect } from 'react';

function Search({ contacts, setContacts }) {
  
  return (
    <div className=" absolute left-0 top-0 w-96 left-1/2 transform -translate-x-1/2" >
      <input
        className="pt-4 pb-4 pl-8 pr-8 w-96 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
        placeholder="Search Contacts by Name"
        type="text"
      
      />
    </div>
  );
}

export default Search;


