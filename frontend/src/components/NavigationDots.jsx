import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='flex justify-center items-center flex-col sm:p-4 p-1'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(( item, index ) => (
            <a 
             className='transition ease-in-out w-2.5 h-2.5 rounded-full bg-[#cbcbdb] m-2 hover:bg-secondary' 
             href={`#${item}`}
             key={ item + index}
             style={active === item ? { backgroundColor: '#313BAC' } : {} }
            />
        ))}
    </div>
  )
}

export default NavigationDots;