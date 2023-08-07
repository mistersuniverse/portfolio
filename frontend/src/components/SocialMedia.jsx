import React from 'react';

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className=' flex justify-end items-center flex-col sm:p-4 p-1'>
        <div className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-4 h-4 rounded-full bg-white my-1 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary'>
            <BsTwitter className='w-8'/>
        </div>
        <div className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-6 h-6 rounded-full bg-white my-1 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary'>
            <FaFacebook />
        </div>
        <div className=' sm:w-10 sm:h-10 xs:h-8 xs:w-8 w-6 h-6 rounded-full bg-white my-1 flex justify-center items-center border xs:border-secondary text-custom-gray hover:text-white hover:bg-secondary'>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia;