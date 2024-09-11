import { useTranslations } from 'next-intl';
import React from 'react';

import ImageWithSkeleton from '@/components/elements/Image';

const Introduction = () => {
  const t = useTranslations();

  return (
    <div className="content-detail border-gray-800">
      <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">
        <strong>{t('page.aboutMe.content1')}</strong>
        {t('page.aboutMe.content2')}
      </p>
      <div className="row mt-20 wow animate__animated animate__fadeIn">
        <ImageWithSkeleton
          className="img-bdrd-16 banner-intro"
          src="../assets/imgs/page/portfolio/portfolio-2.jpg"
          alt="Phieas"
          
        />
        {/* <img
          className="img-bdrd-16"
          src="../assets/imgs/page/portfolio/portfolio-2.jpg"
          alt="Phieas"
        /> */}
      </div>
    </div>
  );
};

export default Introduction;
