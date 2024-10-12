'use client';

import React, { useEffect, useState } from 'react';

import ImageWithSkeleton from '@/components/elements/Image';
import { Portal } from '@/components/elements/Portal';

const WorkingProject = () => {
  const [showMessage, setShowMessage] = useState(false);

  const projectList = [
    {
      projectName: 'Akadev IDE Low-code',
      img: 'akadev.jpg',
      role: 'Developer & User IT',
      description:
        'IDE low-code cho phép người dùng tạo ra website, mobile của họ 1 cách nhanh chóng.',
      year: '2021',
      url: 'https://www.youtube.com/watch?v=YdXImaUvDtc',
    },
    {
      projectName: 'Symliv',
      img: 'symliv.jpg',
      role: 'Developer',
      description: 'Công cụ quản lý khu đô thị.',
      year: '2022',
      url: 'https://symliv.com/',
    },
    {
      projectName: 'Aljaro',
      img: 'aljaro.jpg',
      role: 'Developer',
      description:
        'Website bán hàng, quà tặng, tuỳ chỉnh quà tặng theo sở thích cho người Nhật.',
      year: '2023',
      url: 'https://aljaro.jp/',
    },
    {
      projectName: 'MYP Gold',
      img: 'myp.jpg',
      role: 'Developer',
      description:
        'Ứng dụng mobile giúp người dùng theo dõi giá vàng, gửi tiết kiệm và trả lãi.',
      year: '2024',
      url: 'https://apps.apple.com/th/app/myp/id6483687766',
    },
    {
      projectName: 'Travel together',
      img: 'travelTogether.png',
      role: 'Developer',
      description:
        'Ứng dụng mobile, website kết nối tour du lịch, ghép đôi du lịch.',
      year: '2022',
      url: '',
    },
  ];

  const personalProject = [
    {
      projectName: 'Doc collaboration',
      img: 'phineasDocs.jpg',
      role: 'Developer',
      description:
        'Ứng dụng cho phép nhiều người cùng chỉnh sửa tài liệu theo thời gian thực.',
      year: '2023',
      url: 'https://docs.phineasdev.one/',
    },
  ];

  const handleRedirect = (url: string) => {
    if (!url) {
      setShowMessage(true);
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <div className="content-detail">
      <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">
        Các dự án nổi bật
      </h3>
      <div className="mt-50 mb-50">
        <div className="row mt-50 mb-10">
          {projectList.map((project, index) => (
            <div
              className="col-lg-6 pointer"
              key={index}
              onClick={() => handleRedirect(project.url)}>
              <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                <div className="card-image mb-30 img-fluid">
                  <ImageWithSkeleton
                    src={`../assets/imgs/page/about/${project.img}`}
                    alt="Phineas tran"
                    className="bdrd16 w-100"
                  />
                </div>
                <div className="card-info">
                  <h4 className="color-white mt-20">{project.projectName} </h4>
                  <p className="h-10 color-white" style={{ height: '55px' }}>
                    {project.description}
                  </p>
                  <div className="row align-items-center mt-25">
                    <div className="col-7">
                      <p className="color-gray-700 text-sm">{project.role}</p>
                    </div>
                    <div className="col-5 text-end">
                      <span className="color-gray-700 text-sm timeread">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="color-white mb-30 wow animate__animated animate__fadeIn">
        Các dự án cá nhân
      </h3>
      <div className="mt-50 mb-50">
        <div className="row mt-50 mb-10">
          {personalProject.map((project, index) => (
            <div
              className="col-lg-6 pointer"
              key={index}
              onClick={() => handleRedirect(project.url)}>
              <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                <div className="card-image mb-30 img-fluid">
                  <ImageWithSkeleton
                    src={`../assets/imgs/page/about/${project.img}`}
                    alt="Phineas tran"
                    className="bdrd16 w-100"
                  />
                </div>
                <div className="card-info">
                  <h4 className="color-white mt-20">{project.projectName} </h4>
                  <p className="h-10 color-white" style={{ height: '55px' }}>
                    {project.description}
                  </p>
                  <div className="row align-items-center mt-25">
                    <div className="col-7">
                      <p className="color-gray-700 text-sm">{project.role}</p>
                    </div>
                    <div className="col-5 text-end">
                      <span className="color-gray-700 text-sm timeread">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showMessage && (
        <Portal id="message">
          <div className="message">
            <p>Trang web này không được quyền chia sẻ chi tiết về nó</p>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default WorkingProject;
