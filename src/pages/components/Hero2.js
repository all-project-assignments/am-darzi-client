import React from 'react';
import Button from './Button';

const Hero2 = () => {
  return (
    <div className=' relative '>
      {/* <div className="h-full border-2 border-red-600"> */}
        <img
          className="h-screen object-cover object-top w-auto sm:h-auto sm:object-cove sm:object-center"
          src={require('../../images/hero2.jpeg')}
          alt="main"
        />
      {/* </div> */}
      <div className='absolute max-w-max top-3/4 md:top-3/4 left-[5%] sm:left-[10%] text-xs'>
        <div className='text-white my-2'>THE NEW AM DARZI DESIGN ESSENTIAL</div>
      <Button text="DISCOVER MORE"/>
      </div>
    </div>
  );
};

export default Hero2;