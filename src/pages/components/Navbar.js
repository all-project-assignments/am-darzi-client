import React, { useState, useEffect, useRef } from 'react';
import {MdOutlineAccountCircle} from 'react-icons/md';
import {BsCartDash} from 'react-icons/bs';
const centerItems = [
  'SUITS',
  'DESIGNS',
  'WEDDINGS',
  'VEGAN',
  'VEGAN1',
  'VEGAN2',
  'ABOUT',
  'CONTACT',
];

const Navbar = () => {
    const ref = useRef()
    const [pageY, setPageY] = useState(() => {
       return window.scrollY
    })
    const pageY2 = window.scrollY;

    const handleScroll = (prevScroll) => {
        const scrollPosition = window.scrollY; // => scroll position
        // console.log(pageY2, scrollPosition)
        if(prevScroll > scrollPosition){
            console.log(ref.current)
        }
        setPageY(scrollPosition);
        // console.log(scrollPosition);
    };
    useEffect(() => {
        const prevScroll = window.scrollY
      handleScroll(prevScroll);
      window.addEventListener("scroll",handleScroll(prevScroll));
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      }, []);
    // useEffect(() => {
    //     let currentY = window.screenY;
    //     if(pageY){}
    // }, [pageY])
  return (
    <div ref={ref} className="fixed overflow-hidden top-0 flex justify-between items-center bg-transparent backdrop-blur-lg w-full h-12 sm:h-24 px-2 sm:px-6 lg:px-10 box-border">
      <HamBurger />
      <div className=" w-12 h-14  bg-white ">
        <img className='object-cover object-top' src="/am-darzi.png" alt="logo" />
        {/* <div className="text-['4rem'] text-white leading-3 sm:leading-10">AM Darzi</div>
        <div className="tracking-[3px] text-xs text-textColor">WORLD BEST</div> */}
      </div>
      <Center />
      <div className="text-white flex gap-4 text-xl">
        <div>
          <MdOutlineAccountCircle />
        </div>
        <div>
          <BsCartDash />
        </div>
      </div>
    </div>
  );
};

const Center = () => {
  return (
    <div>
      <div className="hidden text-white sm:flex gap-3">
        {centerItems.slice(0, 5).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

// click feature left
const HamBurger = () => {
    return (
        <div className="flex flex-col gap-1 sm:hidden">
        <div className="border-y-2 border-textColor rounded-sm w-6"></div>
        <div className="border-y-2 border-textColor rounded-sm w-6"></div>
        <div className="border-y-2 border-textColor rounded-sm w-6"></div>
      </div>
    )
}
export default Navbar;
