import React from 'react';

import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className=' flex justify-end items-center flex-col sm:px-4 pl-1.5 pr-1'>
        <a className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-4 h-4 rounded-full bg-white mt-2 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary' href='https://leetcode.com/surajshukla5604' target='_blank' rel='noopener noreferrer'>
            <SiLeetcode className='w-10'/> 
        </a>
        <a className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-4 h-4 rounded-full bg-white mt-2 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary' href='https://github.com/mistersuniverse' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub className='w-10'/>
        </a>
        <a className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-4 h-4 rounded-full bg-white mt-2 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary' href='https://www.linkedin.com/in/surajshuklaofficial' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin className='w-8'/>
        </a>
    </div>
  )
}

export default SocialMedia;