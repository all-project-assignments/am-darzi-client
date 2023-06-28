import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className='relative top-24 min-h-max'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
