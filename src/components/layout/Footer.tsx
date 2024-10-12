import React from 'react';

import Logo from '../elements/Logo';

const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row flex justify-content-between">
              <div className="col-lg-4 mb-30">
                <Logo />
                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  Chia sẻ kiến thức lập trình, cuộc sống...
                </p>
                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">
                  Địa chỉ
                </h6>
                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  Danang, Vienam
                </p>
              </div>
              <div className="col-lg-4 mb-30">
                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                  Tin tức
                </h4>
                <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">
                  Đăng ký để nhận tin tức mới nhất
                </p>
                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                  <div className="form-group">
                    <input
                      className="input-name border-gray-500"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input-email border-gray-500"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mt-20">
                    <button
                      className="btn btn-linear hover-up"
                    >
                      Đăng ký
                      <i className="fi-rr-arrow-small-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom border-gray-800">
              <div className="row">
                <div className="col-lg-5 text-center text-lg-start">
                  <p className="text-base color-white wow animate__animated animate__fadeIn">
                    © 2024 tạo bởi Phineas
                  </p>
                </div>
                {/* <div className="col-lg-7 text-center text-lg-end">
                  <div className="box-socials">
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".0s">
                      <Link
                        className="icon-socials icon-github color-gray-500"
                        href="https://twitter.com">
                        Twitter
                      </Link>
                    </div>
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s">
                      <Link
                        className="icon-socials icon-linked color-gray-500"
                        href="https://www.linkedin.com">
                        LinkedIn
                      </Link>
                    </div>
                    <div
                      className="d-inline-block wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s">
                      <Link
                        className="icon-socials icon-insta color-gray-500"
                        href="https://www.instagram.com">
                        Instagram
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
