import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData; //destructuring of data

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-8'> Take a Coffee & chat with me</h2>

      <div className='w-full md:w-4/5 lg:w-3/5 flex justify-evenly items-center flex-wrap mt-16 xs:mx-8 mb-2 xs:mb-8 flex-col md:flex-row'>
        <div className='flex justify-start items-center xs:flex-row flex-col my-2 xs:my-4 mx-0 p-1 cursor-pointer rounded-xl bg-[#fef4f5] hover:shadow-lg border border-custom-gray border-opacity-10'>
          <img className='w-7 h-7 mb-1 xs:w-10 xs:h-10 mx-3' src={images.email} alt='email' />
          <a className='font-medium' href='mailto:surajshukla5604@gmail.com'>hello@surajshukla.com</a>
        </div>
        <div className='flex justify-start items-center xs:flex-row flex-col my-2 xs:my-4 mx-0 p-1 cursor-pointer rounded-xl bg-[#f2f7fb] hover:shadow-lg border border-custom-gray border-opacity-10'>
          <img className='w-7 h-7 mb-1 xs:w-10 xs:h-10 mx-3' src={images.mobile} alt='email' />
          <a className='font-medium' href='tel: +91 8595561625'>+91 9544567890</a>
        </div>
      </div>

      { !isFormSubmitted ? (

          <form className='md:w-3/5 flex-col mt-4 mx-0 md:mx-8 flex justify-center items-center' onSubmit={handleSubmit}>
            <div className='cursor-pointer w-full my-3 rounded-xl flex justify-center items-center bg-primary hover:shadow-lg'>
              <input className='w-full p-[0.95rem] rounded-lg bg-primary font-base text-secondary border border-custom-gray border-opacity-10' type='text' placeholder='Your Name' name='name' value={name} required onChange={handleChangeInput}/>
            </div>
            <div className='cursor-pointer w-full my-3 rounded-xl flex justify-center items-center bg-primary hover:shadow-lg'>
              <input className='w-full p-[0.95rem] rounded-lg bg-primary font-base text-secondary border border-custom-gray border-opacity-10' type='email' placeholder='Your Email' name='email' value={email} required onChange={handleChangeInput}/>
            </div>
            <div className='cursor-pointer w-full my-3 rounded-xl flex justify-center items-center bg-primary hover:shadow-lg'>
              <textarea 
                className='w-full h-44 p-[0.95rem] rounded-lg bg-primary font-base text-secondary border border-custom-gray border-opacity-10'
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChangeInput}
                required
              />
            </div>
            <button className='py-4 px-8 rounded-lg bg-secondary font-medium mt-8 font-base cursor-pointer hover:bg-[#243af] text-white' type='submit'>{!loading ? 'Send Message' : 'Sending...'} </button>
          </form>
          
        ) : (
          
          <div>
            <h3>
              Thank you for getting in touch!
            </h3>
          </div>
      )}
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'flex w-full flex-col'),
  'contact',
  'bg-white'
);