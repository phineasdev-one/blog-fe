import Link from 'next/link';
import React, { FC } from 'react';

import { getPostByCategory } from '@/data/service/Post/getPostByCategory';
import { formatDateTime } from '@/utils/dateTime';
type Props = { params: { slug: string } };

const Category: FC<Props> = async ({ params }) => {
  const { slug } = params;

  const categoryDetail = await getPostByCategory({ categoryName: slug });

  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            <div className="row align-items-end mt-50">
              <div className="col-lg-12 text-center">
                <div className="d-inline-block position-relative">
                  <h1 className="color-white mb-10 color-linear wow animate__animated animate__fadeIn">
                    {categoryDetail.name}
                  </h1>
                </div>
                <p className="color-gray-500 text-base mb-20 wow animate__animated animate__fadeIn">
                  {categoryDetail.description}
                </p>
              </div>
              {/* <div className="col-lg-12 text-center">
                <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                  <Breadcrumb title={categoryDetail.name} />
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="border-bottom border-gray-800 mt-30 mb-30" />
              </div>
            </div>
            <div className="box-list-posts mt-40">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="box-list-posts mt-30">
                    {categoryDetail.posts?.map((post, i) => (
                      <div
                        key={i}
                        className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <div className="box-author mb-20">
                            <img src={post.poster} alt="Phieas" />
                            <div className="author-info">
                              <h6 className="color-gray-700">Phineas</h6>
                              <span className="color-gray-700 text-sm">
                                {formatDateTime(post.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-info">
                          <Link href={`/bai-viet/${post.slug}`}>
                            <h4 className="mb-20 color-white">{post.title}</h4>
                          </Link>
                          <div className="row mt-20">
                            <div className="col-7">
                              {post.tags?.map((tag) => (
                                <Link
                                  className="color-gray-700 text-sm mr-15"
                                  href={`/tag/${tag.label}`}
                                  key={tag.label}>
                                  #{tag.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Category;
