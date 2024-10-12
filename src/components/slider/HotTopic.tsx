'use client';

import Link from 'next/link';
import React, { FC } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageWithSkeleton from '@/components/elements/Image';
import { Category } from '@/data/model/Category/category';

SwiperCore.use([Autoplay, Navigation]);

type Props = {
  categories: Category[];
};

const HotTopic: FC<Props> = ({ categories }) => {
  return (
    <>
      <div className="mb-70">
        <div className="box-topics border-gray-800 bg-gray-850">
          <div className="row">
            <div className="col-lg-2">
              <h5
                className="mb-15 color-white wow animate__animated animate__fadeInUp"
                data-wow-delay="0s">
                Chủ đề nóng
              </h5>
              <p
                className="color-gray-500 mb-20 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s">
                Đừng bỏ lỡ những tin tức mới nhất về cẩm nang code, các công
                nghệ, cuộc sống...
              </p>
              <div className="box-buttons-slider position-relative wow animate__animated animate__zoomIn">
                <div className="swiper-button-prev swiper-button-prev-style-1" />
                <div className="swiper-button-next swiper-button-next-style-1" />
              </div>
            </div>

            <div className="col-lg-10">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-5">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: '.swiper-button-prev-style-1',
                      nextEl: '.swiper-button-next-style-1',
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                      1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                    className="swiper-wrapper">
                    {categories.map((category, index) => (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <div className="card-style-1">
                          <Link href={`/danh-muc/${category.name}`}>
                            <div className="card-image">
                              <ImageWithSkeleton
                                style={{
                                  objectFit: 'cover',
                                  height: 200,
                                }}
                                src={category.poster}
                                alt="Phineas"
                              />
                              {/* <img
                                style={{ objectFit: 'cover' }}
                                width={200}
                                height={200}
                                src={category.poster}
                                alt="Phineas"
                              /> */}
                              <div className="card-info">
                                <div className="info-bottom">
                                  <h6 className="color-white mb-5">
                                    {category.name}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotTopic;
