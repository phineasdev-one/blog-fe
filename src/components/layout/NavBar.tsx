'use client';
import React, { useState } from 'react';

import Header from './Header';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [openClass, setOpenClass] = useState('');

  const handleOpen = () => {
    document.body.classList.add('mobile-menu-active');

    setOpenClass('sidebar-visible');
  };

  const handleRemove = () => {
    if (openClass === 'sidebar-visible') {
      document.body.classList.remove('mobile-menu-active');

      setOpenClass('');
    }
  };

  return (
    <>
      {openClass && <div className="body-overlay-1" onClick={handleRemove} />}

      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
      />
      <MobileMenu onClose={handleRemove} openClass={openClass} />
    </>
  );
};

export default NavBar;
