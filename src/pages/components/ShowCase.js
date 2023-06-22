import React from 'react';

const ShowCase = () => {
  return (
    <div className="font-gotham sm:flex sm:max-w-4xl sm:mx-auto sm:mt-16 items-center">
      <div className="px-4">
        <img className='' src={require('../../images/second.jpeg')} alt="deisgn" />
      </div>
      <div className='sm:pl-16'>
        <div className="flex flex-col items-center py-4 sm:justify-center sm:w-full">
          <div className="flex items-center py-2">
            <span className="tracking-[5px] sm:text-4xl">SIMPLY</span>
            <span className="font-great text-8xl text-lightPink">Perfect</span>
          </div>
          <div className="font-bold tracking-wider pt-4 sm:text-xl">HALF-CANVAS SUITS</div>
          <div className="font-semibold text-xs sm:text-base pl-2 pr-14 py-1 bg-pink  text-white">
            PERSONALIZED LUXURY - INSIDE/OUT
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
