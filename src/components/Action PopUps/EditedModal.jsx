import React from 'react'
import { Icon } from '@iconify/react';
function EditedModal() {
  return (
    <div className='z-40 w-80 h-40 bg-orange-500 absolute right-24 bottom-24 rounded-lg flex justify-center items-center animate-in fade-in shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <Icon icon="basil:edit-alt-solid" className='text-white w-8 h-8' />
      <h1 className='text-white'>Contact Edited Successfully!</h1>
    </div>
  )
}

export default EditedModal