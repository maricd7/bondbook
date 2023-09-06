import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Prim_Button from '../Button/Cta';

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const delayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1 } },
  };

  useEffect(() => {
    // Hide scroll bars when component mounts
    document.body.style.overflow = 'hidden';

    // Restore scroll bars when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className=" text-gray-50		 absolute h-full w-full m-0 flex justify-center items-center h-screen"
    >
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="text-8xl text-slate-700	 font-bold"
          variants={delayVariants}
        >
          Your Unified Contact Manager
        </motion.h1>
        <motion.h2
          className="text-xl text-slate-700	 text-center mt-8"
          variants={delayVariants}
        >
          Streamline Your Connections Seamlessly with BondBook: The Ultimate Contact Management App!
        </motion.h2>
        <Link to="pages/UserDashboard">
          <motion.div
            variants={delayVariants}
            initial="hidden"
            animate="visible"
          >
            <Prim_Button />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
