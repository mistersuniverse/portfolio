import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1 ], 
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='bg-hero relative bg-cover bg-center bg-repeat flex flex-col lg:flex-row w-full h-full lg:mt-4'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='flex flex-col lg:flex-row h-full mr-8  w-full flex-[0.65] z-30'
        >
        <div className='flex sm:justify-start sm:items-end justify-start items-start flex-col w-full h-full'>
          <div className='px-4 py-3 sm:px-6 sm:py-4 bg-white rounded-2xl flex w-auto shadow-lg shadow-offset-x-2 shadow-offset-y-2 shadow-blur-5 items-center '>
            <span className=' text-[2rem] xl:text-[3rem]'>👋</span>
            <div className=' ml-[6px]'>
              <p className=' text-xs xs:text-sm text-custom-gray font-medium'>Hello, I am</p>
              <h1 className='text-xl xs:text-2xl sm:text-3xl font-bold'>Suraj Shukla</h1>
            </div>
          </div>

          <div className='px-4 py-3 sm:px-6 sm:py-4 bg-white rounded-2xl flex w-auto shadow-2xl flex-col mt-8 sm:mt-12'>
            <p className='w-full uppercase text-right text-custom-gray font-medium text-xs xs:text-sm'>Web Developer</p>
            <p className='w-full uppercase text-right text-custom-gray font-medium text-xs xs:text-sm' >Freelancer</p>
          </div>
          </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='relative'
      >
        <img className='z-20 relative w-full h-full mx-auto bottom-0' src={images.profile} alt='profile'/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='flex-1 flex justify-end items-end absolute sm:top-24 top-4 z-10'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex-[0.75] xs:flex-row flex-col flex lg:flex-col xs:justify-evenly xs:items-start mx-auto xs:mx-0 h-full sm:ml-4 mt-4 xs:mt-8 sm:mt-16 lg:mt-0 skill-circles'
      >
        { 
          [ images.flutter, images.redux, images.sass ].map((circle, index) => (
            <motion.div whileHover={{scale:1.1}} className='rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300 ' key={`circle-${index}`}>
              <img className='w-3/5 h-3/5' src={circle} alt='profile_bg' />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');