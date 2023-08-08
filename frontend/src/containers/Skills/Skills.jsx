import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => { 
        setExperiences(data);
      });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
  }, [])

  return (
    <div className='flex justify-start flex-col items-center'>
      <h2 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold'> Skills & Experience</h2>

      <div className='w-full xs:w-4/5 mt-4 flex justify-between'>
        <div className='flex-1 flex flex-wrap justify-start items-start sm:justify-center sm:items-center'>
          {
            skills.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='text-center n-0 xs:m-4 pt-[3px]'
                key={`${skill}-${index}`}
              >
                <div className='w-16 h-16 md:h-24 md:w-24 rounded-full hover:shadow-xl hover:border hover:border-custom-gray hover:border-opacity-25 4xl:w-40 4xl:h-40 items-center justify-center flex transition ease-in-out' style={{ backgroundColor: skills.bgColor }}>
                  <img className='w-1/2 h-1/2' src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </motion.div>
            ))
          }
        </div>


        <div className="flex-[0.75] flex justify-start items-start flex-col">
          {experiences.map((experience, index) => (
            <motion.div
              className="w-full flex justify-start items-start mt-4 xs:pt-[17px] md:pt-[26.5px] lg:gap-20 sm:gap-6 gap-4"
              key={`${experience}-${index}`}
            >
              <div className="">
                <p className="font-extrabold text-secondary">{experience.year}</p>
              </div>
              <motion.div className="flex flex-col">
                {experience.works.map((work, index) => (
                  <div key={`${work.name}-${index}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-6 cursor-pointer"
                      data-tooltip-id='experience-tooltip'
                      data-tooltip-content={work.desc}

                    > 
                      <h4 className=" font-medium text[1.25rem]">{work.name}</h4>
                      <p className=" font-normal text-custom-gray mt-1 text-sm">{work.company}</p>
                    </motion.div>
                  </div>
                ))}
                  <Tooltip id="experience-tooltip" className='skills-tooltip' />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'flex w-full flex-col'),
  'skills',
  'bg-white'
);