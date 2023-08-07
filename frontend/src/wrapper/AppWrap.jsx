import React from 'react';

import { NavigationDots, SocialMedia } from '../components';

const AppWrap = ( Component, idName, classNames ) => function HOC() {
  return (
    <div id={ idName } className='w-full min-h-screen flex' >
        <SocialMedia />

        <div className='flex-1 w-full flex-col pt-16 sm:px-8 px-0'>
            <Component />

            {/* <div className='w-full pt-8 flex flex-col justify-end items-end'>
                <p className='uppercase text-black'>@2023 SURAJSHUKLA</p>
                <p className='uppercase text-black'>All rights reserved</p>
            </div> */}
        </div>

        <NavigationDots active={ idName }/>
    </div>
  )
}

export default AppWrap;