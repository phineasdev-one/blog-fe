import React from 'react';

import ImageWithSkeleton from '@/components/elements/Image';

const Introduction = () => {

  return (
    <div className="content-detail border-gray-800">
      <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">
        <strong>Mình là Trần Phi Anh.{' '}</strong>
        Là 1 lập trình viên tại Đà Nẵng với 3 năm kinh nghiệm làm việc trong lĩnh vực phát triển ứng dụng, website.
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
