import { FC } from 'react';

import BackToTop from '@/components/elements/BackToTop';
import Footer from '@/components/layout/Footer';
import { ChildProps } from '@/types/common';
import NavBar from './NavBar';

const Layout: FC<ChildProps> = ({ children }) => {

  return (
    <>
      <NavBar />
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
