import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='relative'>
      {/* <div className="h-full border-2 border-red-600"> */}
        <div>
        <img
          className="h-[calc(100vh_-_6rem] object-cover object-top w-auto sm:h-auto sm:object-cove sm:object-center"
          src={require('../../AM-Darzi-Hero.jpeg')}
          alt="main"
        />
        </div>
      {/* </div> */}
      <div className='absolute max-w-max top-2/4 md:top-3/4 left-[5%] sm:left-[10%] text-xs'>
        <div className='text-white my-2 font-gotham font-bold text-lg sm:text-xl'>THE NEW AM DARZI DESIGN ESSENTIAL</div>
      <Button text="DISCOVER MORE"/>
      </div>
    </div>
  );
};

export default Hero;
