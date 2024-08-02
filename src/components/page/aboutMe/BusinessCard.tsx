import React from 'react';

const BusinessCard = () => {
  return (
    <div className="row mt-30">
      <div className="swiper-container swiper-group-2">
        <div className="swiper-wrapper wow animate__animated animate__fadeIn">
          <div className="swiper-slide">
            <div className="image-detail mb-30">
              <img
                className="bdrd16 w-100"
                src="../assets/imgs/page/portfolio/portfolio.png"
                alt="Phineas Tran"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
