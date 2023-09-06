import React from 'react';
import { motion } from 'framer-motion';

function Prim_Button() {
  const gradientVariants = {
    rest: {
      background:
        'linear-gradient(90deg, rgba(71,101,255,0.8) 0%, rgba(0,209,255,0.64) 100%)',
    },
    hover: {
      background:
        'linear-gradient(90deg, rgba(0,209,255,0.64) 0%, rgba(71,101,255,0.8) 100%)',
    },
  };

  return (
    <div>
      <motion.button
        className='relative px-24 py-8 rounded-lg mt-12 text-white font-bold flex justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)]'
        variants={gradientVariants}
        initial="rest"
        whileHover="hover"
      >
        Start Now
      </motion.button>
    </div>
  );
}

export default Prim_Button;
