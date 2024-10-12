'use client';
import Typewriter from 'typewriter-effect';

import ImageWithSkeleton from '@/components/elements/Image';

const Hero1 = () => {

  return (
    <div className="banner">
      <div className="row ">
        <div className="col-lg-6 main-content-banner">
          <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">
            Xin chào!
          </span>
          <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
            Mình là
            <Typewriter
              options={{
                wrapperClassName: 'typewrite color-linear',
                strings: [
                  'Phineas Tran',
                  'Developer',
                  'Front-End',
                  'Full-Stack',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="row">
            <div className="col-lg-9">
              <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                Cảm ơn mọi người đã dành thời gian ghé thăm!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="banner-img position-relative wow animate__animated animate__fadeIn">
            <img src="assets/imgs/phianh.png" alt="Phineas" loading="lazy" />
            <div className="pattern-1">
              {/* <img
                src="assets/imgs/template/pattern-1.svg"
                alt="Phineas"
                loading="lazy"
              /> */}
              <ImageWithSkeleton
                src="assets/imgs/template/pattern-1.svg"
                alt="Phineas"
              />
            </div>
            <div className="pattern-2">
              <img
                src="assets/imgs/template/pattern-2.svg"
                alt="Phineas"
                loading="lazy"
              />
            </div>
            <div className="pattern-3">
              <img
                src="assets/imgs/template/pattern-3.svg"
                alt="Phineas"
                loading="lazy"
              />
            </div>
            <div className="pattern-4">
              <img
                src="assets/imgs/template/pattern-4.svg"
                alt="Phineas"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
