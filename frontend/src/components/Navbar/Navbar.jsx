import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center px-8 py-4 border border-solid border-white border-opacity-20 fixed z-10 filter bg-white bg-opacity-25 backdrop-blur-sm'>
      <div className='flex justify-between items-center'>
        <img className=' w-24 h-5 xl:w-48 xl:h-10' src={images.logo} alt='logo' />
      </div>
      <ul className='flex-1 md:flex justify-center items-center hidden'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='flex flex-col items-center mx-4 pointer cursor group' key={`link-${item}`} >
            <div className=' w-1 h-1 rounded-full bg-transparent mb-1 group-hover:bg-secondary'/>
            <a className=' uppercase font-medium text-custom-gray hover:text-secondary transition ease-in-out' href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className=" relative w-9 h-9 rounded-full flex justify-center items-center bg-secondary md:hidden">
        <HiMenuAlt4 className=' w-8/12 h-8/12 text-white z-10' onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className='fixed top-0 bottom-0 right-0 z-20 w-4/5 h-screen flex justify-end items-end flex-col bg-white bg-cover bg-repeat bg-navbar-menu shadow-xl'
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className=' w-9 h-9 text-secondary mx-6 my-4' onClick={() => setToggle(false)} />
            <ul className='h-full w-full flex justify-start items-start flex-col'>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className='m-4' key={item}>
                  <a className=' text-custom-gray text-base uppercase font-medium transition ease-in-out hover:text-secondary' href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;