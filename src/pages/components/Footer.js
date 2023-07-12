import React from 'react';
import {FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {CiLocationOn} from 'react-icons/ci';
import {MdEmail} from 'react-icons/md';
import {TbPhoneCall} from 'react-icons/tb';
import backgroundImage from '../../images/hero2.jpeg';

const Footer = () => {
  return (
    <div className="relative w-full -bottom-24  font-gotham text-white">
      {/* Background Image */}
      <div className="border ">
        {/* <img className='backdrop-filter-none blur-[18px] opacity-80 border-none outline-none  h-96 object-cover object-center sm:h-80 sm:w-full sm:object-top 'src={backgroundImage} alt="footer" /> */}
        {/* <img className='blur-[2px]  opacity-90  border-none outline-none  h-96 object-cover object-center sm:h-80 sm:w-full sm:object-top 'src={backgroundImage} alt="footer" /> */}
        <img
          className="  border-none outline-none  h-96 object-cover object-center sm:h-80 sm:w-full sm:object-top "
          src={backgroundImage}
          alt="footer"
        />
      </div>
      {/* content */}
      <div className="absolute top-0 bg-transparent backdrop-blur-xl w-full grid grid-cols-2 sm:grid-cols-3 sm:flex-row font-light sm:h-80  sm:px-16">
        <div className='pl-1'>
          <div className="sm:h-32">
            <img
              className=" h-28 sm:h-32 object-cover object-top "
              src="/am-darzi.png"
              alt="logo"
            />
          </div>
          <div className="sm:pt-4 flex flex-col gap-2">
            <div className="flex">
              <div className="text-xl pr-2">
                <CiLocationOn />
              </div>
              <div className="text-left">
                <div className="text-xl">A.M. Darzi</div>
                <div className="text-xs">
                  Ground Floor Shop No 103 Marris Road Aligarh Land Mark
                  Shopping Mall, Centre Point Aligarh, Aligarh-202001, Uttar
                  Pradesh, India
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="text-xl pr-2">
                <MdEmail />
              </div>
              <div> Your Email here </div>{' '}
            </div>
            <div className="flex">
              <div className="text-xl pr-2">
                <TbPhoneCall />
              </div>
              <div>Call 08069033866 </div>{' '}
            </div>
          </div>
        </div>
        {/* cat links */}
        <div className="mt-12 flex  justify-end sm:justify-center pr-8">
          <div className='text-left flex flex-col gap-2 sm:gap-4 '>
            <div>Suits</div>
            <div>Design</div>
            <div>Weddings</div>
            <div>Vegan</div>
            <div>More+</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        {/* social icons */}
        {/* <br className='sm:hidden' /> */}
        <div className=" pb-8 sm:mt-8 col-span-2 sm:col-span-1 justify-self-center sm:justify-self-end">
          <div className="mt-4 mb-2 sm:my-4 pr-20">Follow Us</div>
          <div className="flex gap-3 text-white">
            <div className="bg-black rounded-full p-2 ">
              <a href="https://www.facebook.com/am.darzi/">
                <FaFacebookF />
              </a>
            </div>
            <div className="bg-black rounded-full p-2 ">
              <a href="https://www.instagram.com/am.darzi/?hl=en">
                <FaInstagram />
              </a>
            </div>
            <div className="bg-black rounded-full p-2 ">
              <a href="https://in.linkedin.com/in/mohd-imran-3aa879274">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
