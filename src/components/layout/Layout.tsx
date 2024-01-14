'use client';

import { FC, useState } from 'react';

import BackToTop from '@/components/elements/BackToTop';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import { ChildProps } from '@/types/common';

const Layout: FC<ChildProps> = ({ children }) => {
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
      <MobileMenu openClass={openClass} />
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
