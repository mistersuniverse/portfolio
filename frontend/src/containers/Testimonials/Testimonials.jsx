import React,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import {urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => { 
        setTestimonials(data);
      });

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });
  }, [])

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  } 

  return (
    <>
      { testimonials.length && (
        <>
          <div className='md:w-3/5 w-full xs:min-h-[320px] bg-white flex flex-col sm:flex-row justify-center items-center  p-2 xs:p-4 sm:px-8 rounded-2xl shadow-lg 4xl:min-h-[450px] '>
            <img className='w-40 h-40' src={urlFor(test?.imgurl)} alt='testimonial'/>
            <div className='flex-1 h-full p-2 xs:p-4 sm:px-8 text-left flex flex-col justify-around items-start sm:mt-8 sm:p-0'>
              <p className='sm:text-xl text-black font-base 4xl:text-[2rem] 4xl:leading-[3.5rem]'>{test.feedback}</p>
              <div>
                  <h4 className='font-semibold text-secondary mt-8'>{test.name}</h4>
                  <h5 className='font-normal text-custom-gray mt-1.5'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='mt-4  flex justify-center items-center'>
            <div className='w-12 h-12 rounded-full bg-white m-4 flex justify-center items-center hover:bg-secondary hover:text-white' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1: currentIndex - 1 )}>
              <HiChevronLeft />
            </div>

            <div className='w-12 h-12 rounded-full bg-white m-4 flex justify-center items-center hover:bg-secondary hover:text-white' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0: currentIndex + 1 )}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='w-4/5 flex-wrap xs:selection:mt-8 flex justify-center items-center'>
        { brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1]}}  
            transition={{ duration: 0.5, type: 'tween'}}
            key={brand._id}
            className='w-28 xm:w-32 4xl:w-52 h-auto m-2 xs:m-6 4xl:m-8'
          >
            <img className='w-full h-auto object-cover grayscale hover:grayscale-0' src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'flex w-full flex-col' ),
  'testimonials',
  'bg-primary'
);