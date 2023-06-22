import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='border-2 border-yellow-500  '>
      {/* <div className="h-full border-2 border-red-600"> */}
        <div>
        <img
          className="h-screen object-cover object-top w-auto sm:h-auto sm:object-cove sm:object-center"
          src={require('../../AM-Darzi-Hero.jpeg')}
          alt="main"
        />
        </div>
      {/* </div> */}
      <div className='absolute max-w-max top-3/4 md:top-3/4 left-[5%] sm:left-[10%] text-xs'>
        <div className='text-white my-2'>THE NEW AM DARZI DESIGN ESSENTIAL</div>
      <Button text="DISCOVER MORE"/>
      </div>
    </div>
  );
};

export default Hero;
