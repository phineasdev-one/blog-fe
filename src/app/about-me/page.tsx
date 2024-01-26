import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'About me',
  description: 'The best blog app!',
  icons: {
    icon: './favicon.ico',
  },
};

const PortfolioDetails = () => {
  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            <div className="row mt-50 align-items-end">
              <div className="col-lg-8 m-auto text-center">
                <h2 className="color-linear">Business</h2>
              </div>
            </div>
            <div className="row mt-30 mb-50">
              <div className="swiper-container swiper-group-2">
                <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                  <div className="swiper-slide">
                    <div className="image-detail mb-30">
                      <img
                        className="bdrd16 w-100"
                        src="assets/imgs/page/portfolio/portfolio.png"
                        alt="Phieas"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="content-detail border-gray-800">
                  <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">
                    About me
                  </h3>
                  <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">
                    <strong>Hello I'm Tran Phi Anh. </strong>
                    Front-End Developer from DaNang. My big goal is to improve
                    my coding and teamwork skills, leverage and understand
                    myself to become a professional developer.
                  </p>
                  <p className="text-lg color-gray-500 wow animate__animated animate__fadeIn">
                    I am an IT with two years of experience in application
                    development, website development, and implementation. I am
                    highly creative and tech-savvy. I am a fast learner and I
                    can quickly research new technology in many ways. I am able
                    to work well in a team-oriented environment and I have many
                    experiences in cooperation as well.
                  </p>
                  <div className="row mt-50 wow animate__animated animate__fadeIn">
                    <img
                      className="img-bdrd-16 mb-30"
                      src="assets/imgs/page/portfolio/portfolio-2.jpg"
                      alt="Phieas"
                    />
                  </div>
                </div>
                <div className="box-tags wow animate__animated animate__fadeIn">
                  <Link
                    className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                    href="blog-archive">
                    #Nature
                  </Link>
                  <Link
                    className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                    href="blog-archive">
                    #Beauty
                  </Link>
                  <Link
                    className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
                    href="blog-archive">
                    #Travel Tips
                  </Link>
                  <Link
                    className="btn btn-tags bg-gray-850 border-gray-800 hover-up"
                    href="blog-archive">
                    #House
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                      <h5 className="line-bottom">Experience</h5>
                    </div>
                    <div className="content-sidebar">
                      <div className="list-comments">
                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                          <p className="color-gray-200 mb-10 text-uppercase lh-lg">
                            FPT Software
                          </p>
                          <p className="color-gray-500 lh-lg">
                            Front-end Developer
                          </p>
                        </div>
                        <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                          <p className="color-gray-200 mb-10 text-uppercase lh-lg">
                            <Link
                              className="text-white"
                              href="https://corize.co.jp/en/">
                              Corize INC VietNam | Present
                            </Link>
                          </p>
                          <p className="color-gray-500 lh-lg">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-inline-block pt-10 wow animate__animated animate__fadeIn">
                    <div className="d-flex align-item-center">
                      <h6 className="d-inline-block color-gray-500 mr-10">
                        Share
                      </h6>
                      <Link className="icon-media icon-fb" href="#" />
                      <Link className="icon-media icon-tw" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
