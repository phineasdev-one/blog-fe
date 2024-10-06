'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import ImageWithSkeleton from '@/components/elements/Image';
import { Portal } from '@/components/elements/Portal';

const WorkingProject = () => {
  const t = useTranslations();

  const [showMessage, setShowMessage] = useState(false);

  const projectList = [
    {
      projectName: t('page.aboutMe.project.akadev.name'),
      img: 'akadev.jpg',
      role: t('page.aboutMe.project.akadev.role'),
      description: t('page.aboutMe.project.akadev.description'),
      year: '2021',
      url: 'https://www.youtube.com/watch?v=YdXImaUvDtc',
    },
    {
      projectName: t('page.aboutMe.project.symliv.name'),
      img: 'symliv.jpg',
      role: t('page.aboutMe.project.symliv.role'),
      description: t('page.aboutMe.project.symliv.description'),
      year: '2022',
      url: 'https://symliv.com/',
    },
    {
      projectName: t('page.aboutMe.project.aljaro.name'),
      img: 'aljaro.jpg',
      role: t('page.aboutMe.project.aljaro.role'),
      description: t('page.aboutMe.project.aljaro.description'),
      year: '2023',
      url: 'https://aljaro.jp/',
    },
    {
      projectName: t('page.aboutMe.project.mypGold.name'),
      img: 'myp.jpg',
      role: t('page.aboutMe.project.mypGold.role'),
      description: t('page.aboutMe.project.mypGold.description'),
      year: '2024',
      url: 'https://apps.apple.com/th/app/myp/id6483687766',
    },
    {
      projectName: 'Travel together',
      img: 'travelTogether.png',
      role: t('page.aboutMe.project.mypGold.role'),
      description:
        'Ứng dụng mobile, website kết nối tour du lịch, ghép đôi du lịch',
      year: '2022',
      url: '',
    },
  ];

  const personalProject = [
    {
      projectName: "Doc collaboration",
      img: 'phineasDocs.jpg',
      role: t('page.aboutMe.project.symliv.role'),
      description: "Ứng dụng cho phép nhiều người cùng chỉnh sửa tài liệu theo thời gian thực",
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
        {t('page.aboutMe.project.title')}
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
                  {/* <img
                    src={`../assets/imgs/page/about/${project.img}`}
                    alt="Phineas tran"
                    className="bdrd16 w-100"
                  /> */}
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
