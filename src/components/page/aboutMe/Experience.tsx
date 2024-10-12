import Link from 'next/link';
import React from 'react';

const Experience = () => {

  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="box-sidebar bg-gray-850 border-gray-800">
          <div className="head-sidebar wow animate__animated animate__fadeIn">
            <h5 className="line-bottom">
              Kinh nghiệm làm việc
            </h5>
          </div>
          <div className="content-sidebar">
            <div className="list-comments">
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-200 mb-5 text-uppercase lh-lg">
                  FPT Software
                </p>
                <p className="color-gray-500 lh-lg">Front-end Developer</p>
              </div>
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-200 mb-5 text-uppercase lh-lg">
                  <Link className="text-white" href="https://corize.co.jp/en/">
                    Corize INC VietNam | Present
                  </Link>
                </p>
                <p className="color-gray-500 lh-lg">Front-end Developer</p>
              </div>
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <p className="color-gray-200 mb-5 text-uppercase lh-lg">
                  Skills
                </p>
                <li className="color-gray-500 lh-lg">
                  Javascript, ReactJS, NextJS, NestJS
                </li>
                <li className="color-gray-500 lh-lg">
                  Mobile: React Native, Flutter
                </li>
                <li className="color-gray-500 lh-lg">
                  MySQL, MongoDB, Firebase
                </li>
                <li className="color-gray-500 lh-lg">AWS, Docker, CircleCI</li>
              </div>
              <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                <Link
                  className="btn btn-linear d-sm-inline-block hover-up hover-shadow"
                  href="/TranPhiAnh.pdf"
                  target="_blank"
                  download>
                  Tải xuống CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
