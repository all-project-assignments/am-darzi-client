import React from 'react';
import {FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';

import backgroundImage from '../../images/hero2.jpeg';

const Footer = () => {
  return (
    <div className="relative  font-gotham text-white">
        {/* Background Image */}
      <div className='border ' >
        {/* <img className='backdrop-filter-none blur-[18px] opacity-80 border-none outline-none  h-96 object-cover object-center sm:h-80 sm:w-full sm:object-top 'src={backgroundImage} alt="footer" /> */}
        <img className='blur-[2px]  opacity-90  border-none outline-none  h-96 object-cover object-center sm:h-80 sm:w-full sm:object-top 'src={backgroundImage} alt="footer" />
      </div>
      {/* content */}
      <div className="absolute top-0 w-full grid grid-cols-2 sm:grid-cols-3 sm:flex-row font-light  sm:px-16">
        <div >
          <div className=" ">
            <img
              className=" h-32 sm:h-48 object-cover object-top "
              src="/am-darzi.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>Your Address here and next line</div>
            <div>Your Email here </div>
            <div>Other Contact Info</div>
          </div>
        </div>
        {/* cat links */}
        <div className=" flex flex-col mt-12 gap-2 sm:gap-4 items-end sm:items-center pr-8">
          <div>Suits</div>
          <div>Design</div>
          <div>Weddings</div>
          <div>Vegan</div>
          <div>More+</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        {/* social icons */}
        {/* <br className='sm:hidden' /> */}
        <div className="sm:mt-8 col-span-2 sm:col-span-1 justify-self-center sm:justify-self-end">
          <div className='my-4 pr-20'>Follow Us</div>
          <div className='flex gap-3 text-white'>
            <div className='bg-black rounded-full p-2 '>
              <FaFacebookF />
            </div>
            <div className='bg-black rounded-full p-2 '>
              <FaInstagram />
            </div>
            <div className='bg-black rounded-full p-2 '>
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
