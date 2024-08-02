import { Metadata } from 'next';
import React from 'react';

import Experience from '@/components/page/aboutMe/Experience';
import Introduction from '@/components/page/aboutMe/Introduction';
import WorkingProject from '@/components/page/aboutMe/WorkingProject';

export const metadata: Metadata = {
  title: 'Phineas blog',
  description: 'Phineas dev - Personal blog - Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dvahwagyp/image/upload/v1708938368/5bcd466d-cf44-4074-bbd9-74b36feb1123.png',
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            <div className="row mt-50 align-items-end">
              <div className="col-lg-8 m-auto text-center"></div>
            </div>
            <div className="row mt-30">
              <div className="col-lg-8">
                <Introduction />
                {/* <FavoriteTag /> */}
                <WorkingProject />
              </div>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
