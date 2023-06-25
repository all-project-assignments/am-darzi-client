import React, {useState, useEffect, useRef} from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  // const [pageY, setPageY] = useState(() => {
  //    return window.scrollY
  // })
  // const pageY2 = window.scrollY;

  // const handleScroll = (prevScroll) => {
  //     const scrollPosition = window.scrollY; // => scroll position
  //     // console.log(pageY2, scrollPosition)
  //     if(prevScroll > scrollPosition){
  //         console.log(ref.current)
  //     }
  //     setPageY(scrollPosition);
  //     // console.log(scrollPosition);
  // };
  // useEffect(() => {
  //     const prevScroll = window.scrollY
  //   handleScroll(prevScroll);
  //   window.addEventListener("scroll",handleScroll(prevScroll));
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   }, []);
  // // useEffect(() => {
  // //     let currentY = window.screenY;
  // //     if(pageY){}
  // // }, [pageY])

  const handleOpen = () => {};
  return (
    <div
      ref={ref}
      className="fixed top-0 z-50 flex justify-between items-center bg-black backdrop-blur-lg w-full h-12 sm:h-24 sm:px-6 lg:px-10"
    >
      <HamBurger setOpen={() => setIsOpen((prev) => !prev)} />
      <div className=" hidden sm:block sm:w-24 pt-6">
        <img
          className="object-cover object-center "
          src="/logo2.png"
          alt="logo"
        />
        {/* <div className="text-['4rem'] text-white leading-3 sm:leading-10">AM Darzi</div>
        <div className="tracking-[3px] text-xs text-textColor">WORLD BEST</div> */}
      </div>
      {(
        <MobileNavigation
          isOpen={isOpen}
          setOpen={() => setIsOpen(false)}
          onOpen={handleOpen}
        />
      )}
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
const HamBurger = ({setOpen}) => {
  return (
    <div className="flex flex-col gap-1 sm:hidden" onClick={setOpen}>
      <div className="border-y-2 border-textColor rounded-sm w-6"></div>
      <div className="border-y-2 border-textColor rounded-sm w-6"></div>
      <div className="border-y-2 border-textColor rounded-sm w-6"></div>
    </div>
  );
};

const MobileNavigation = ({isOpen, setOpen, onOpen}) => {
  return (
    <div
      className={` z-50 fixed top-0 -left-full bg-[#707070] text-white w-screen ease-in-out duration-700 ${
        isOpen ? "translate-x-full" : "-translate-x-10"
      }`}
    >
      <div className='flex justify-between items-center pl-4'>
      <div className="w-24">
        <img
          className="object-cover object-top"
          src="/logo2.png"
          alt="logo"
        />
        {/* <div className="text-['4rem'] text-white leading-3 sm:leading-10">AM Darzi</div>
        <div className="tracking-[3px] text-xs text-textColor">WORLD BEST</div>*/}
      </div>
      <button className='text-4xl px-2 mr-2 rounded-md  h-9' onClick={setOpen}>x</button>
      </div>
      <div className="">
        {centerItems.slice(0, 5).map((item, index) => (
          <div className=' px-4 py-2 w-full' key={index}>{item}</div>
        ))}
      </div>
      
    </div>
  );
};
export default Navbar;
