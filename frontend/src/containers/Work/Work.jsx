import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1}]);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
    });
  }, [])
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div>
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-8">My Creative <span className='text-secondary'>Portfolio</span><br /> Section</h2>

      <div className='flex justify-evenly items-center flex-wrap mt-16 mx-8 4xl:py-4'>
        {
          [ 'UI/UX', 'Web App', 'Mobile App', 'React App', 'All' ].map((item, index) => (
            <div key={index} onClick={() => handleWorkFilter(item)} className={`${ activeFilter === item && 'bg-secondary text-white' } py-2 px-4 rounded-lg text-black cursor-pointer font-bold font-base hover:bg-secondary hover:text-white 4xl:py-4 4xl:px-8 4xl:rounded-xl`}>
              {item}
            </div>
          ))
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex flex-wrap justify-center items-center'
      >
        { 
          filterWork.map((work, index) => (
          <div className='w-full xs:w-4/5 sm:w-64 h-[340px] 4xl:w-[470px] flex-col xs:m-8 p-2 xs:p-4 4xl:p-5 4xl:rounded-xl rounded-lg bg-white text-black cursor-pointer hover:shadow-2xl shadow-lg text-center' key={index}> 
            <div className='w-full h-56 relative group'>
              <img className='w-full h-full rounded-lg object-cover 4xl:h-[350px] border border-black border-opacity-20 transition-opacity duration-300' src={urlFor(work.imgUrl)} alt={work.title} />

              <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>

              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2'>
                <a className='w-12 h-12 flex' href={work.projectLink} target='_blank' rel='noopener noreferrer'>
                  <motion.div
                    whileInView={{ scale: [ 0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={ { duration: 0.25 }}
                    className='w-12 h-12 rounded-full bg-opacity-50 text-black font-extrabold cursor-pointer font-base flex justify-center items-center'
                  >
                    <AiFillEye className='w-1/2 h-1/2 text-white'/>
                  </motion.div>
                </a>

                <a className='w-12 h-12 flex' href={work.codeLink} target='_blank' rel='noopener noreferrer'>
                  <motion.div
                    whileInView={{ scale: [ 0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={ { duration: 0.25 }}
                    className='w-12 h-12 rounded-full bg-opacity-50 text-black font-extrabold cursor-pointer font-base flex justify-center items-center'
                  >
                    <AiFillGithub className='w-1/2 h-1/2 text-white' />
                  </motion.div>
                </a>
              </div>
            </div>

            <div className='pt-2 px-2 w-full relative flex flex-col items-center justify-center'>
              <h4 className='my-1 leading-6 4xl:m-12 text-xl font-semibold'>{work.title}</h4>
              <p className='text-sm text-custom-gray'>{work.description}</p>
              <div className='absolute py-1 px-4 rounded-lg bg-white top-[-25px] left-[31%]'>
                <p className='uppercase'>{work?.tags[0]}</p>
              </div>

            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Work, 'flex w-full flex-col'),
  'work',
  'bg-primary'
);