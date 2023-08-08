import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then(( data ) => setAbouts( data ))

  }, [])
  
  return (
    <div>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-8">I Know that <span className='text-secondary'>Good Apps</span> <br />Means  <span className='text-secondary'>Good Business</span></h2>

      <div className='flex justify-center items-start flex-wrap mt-8 gap-8'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView = {{ opacity: 1 }}
            whileHover = {{ scale: 1.1 }}
            transition = {{ duration: 0.5, type: 'tween'}}
            className = 'w-56 xs:w-60 h-[360px] flex flex-col items-start justify-start min-[2000px]:w-96 min-[2000px]:mx-16 min-[2000px]:my-8 shadow-xl'
            key = {about.title + index}
          >
            <img className='w-full h-44 min-[2000px]:h-80 rounded-2xl shadow-sm' src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='font-semibold mt-3 mb-0.5 p-1'>{ about.title }</h2>
            <p className=' text-custom-gray text-sm p-1'>{ about.description }</p>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'flex w-full flex-col'),
  'about',
  'bg-white'
);