import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';

import { fetchPostsByTag } from '@/app/actions';
import Breadcrumb from '@/components/elements/Breadcrumb';
import { formatDateTime } from '@/utils/dateTime';
type Props = {
  params: { slug: string };
};

const TagCategory: FC<Props> = async ({ params }) => {
  const { slug } = params;

  const tagDetail = await fetchPostsByTag({
    tagName: slug,
  });

  const tagAvailable = tagDetail.items?.length;

  if (!tagAvailable) {
    return notFound();
  }

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
                    {tagDetail.items[0].tags[0].label}
                  </h1>
                </div>
                <p className="color-gray-500 text-base mb-20 wow animate__animated animate__fadeIn">
                  {tagDetail.items[0].tags[0].description}
                </p>
              </div>
              <div className="col-lg-12 text-center">
                <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                  <Breadcrumb title={tagDetail.items[0].tags[0].label} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="border-bottom border-gray-800 mt-30 mb-30" />
              </div>
            </div>
            <div className="box-list-posts mt-40">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="box-list-posts mt-30">
                    {tagDetail.items.map((item, i) => (
                      <div
                        key={i}
                        className="card-list-posts card-list-posts-small border-bottom border-gray-800 pb-30 mb-30 wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <div className="box-author mb-20">
                            <img
                              src="../assets/imgs/page/homepage1/author3.png"
                              alt="Phineas"
                            />
                            <div className="author-info">
                              <h6 className="color-gray-700">Phineas</h6>
                              <span className="color-gray-700 text-sm">
                                {formatDateTime(item.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-info">
                          <Link href={`/bai-viet/${item.slug}`}>
                            <h3 className="mb-20 color-white">{item.title}</h3>
                          </Link>
                          <p className="color-gray-500">
                            {item.shortDescription}
                          </p>
                          {/* <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive">
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive">
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <Pagination
                    currentPage={tagDetail.meta.currentPage}
                    pageSize={tagDetail.meta.itemsPerPage}
                    totalCount={tagDetail.meta.totalItems}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCategory;
