import React from 'react';

const Feature = ({feature : {text, text2, image}}) => {
  return (
    <div className='font-gotham text-textSecondary bg-slate-200  sm:backdrop-blur-xl  rounded-full py-2 overflow-hidden px-4'>
      <div className='flex'>
        <div className='w-20 h-20 rounded-full'>
          <img className="rounded-full" src={require(`../../../images/feature${image}.jpeg`)} alt="feature1" />
        </div>
        <div className='px-2'>
            <div className='text-[22px]'>{text.toUpperCase()}</div>
            <div className='text-xs'>{text2.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
