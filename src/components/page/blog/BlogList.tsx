'use client';

import React, { FC } from 'react';

import ImageWithSkeleton from '@/components/elements/Image';
import Pagination from '@/components/elements/Pagination';
import { GetPostResponse } from '@/data/model/Post/post';
import { Link } from '@/utils/navigate';

type Props = {
  postResponse: GetPostResponse;
};

const BlogList: FC<Props> = ({ postResponse }) => {
  // const t = useTranslations();

  return (
    <div className="col-lg-8">
      <div className="box-list-posts">
        {postResponse?.items?.map((item, i) => (
          <div
            className="card-list-posts wow animate__animated animate__fadeIn"
            key={i}>
            <div className="card-image hover-up">
              <Link
                href={{
                  pathname: '/blog/[...slug]',
                  params: { slug: [item.slug] },
                }}>
                <ImageWithSkeleton src={item.poster} alt={item.title} />
              </Link>
            </div>
            <div className="card-info">
              <Link
                className="btn btn-tag bg-gray-800 hover-up"
                href={{
                  pathname: '/category/[...slug]',
                  params: { slug: [item.category?.name] },
                }}>
                {item.category?.name}
              </Link>
              <Link
                href={{
                  pathname: '/blog/[...slug]',
                  params: { slug: [item.slug] },
                }}>
                <h4 className="mt-15 mb-20 color-white">{item.title}</h4>
              </Link>
              <div className="row mt-20">
                <div className="col-7">
                  {item.tags
                    ? item.tags.map((tag) => (
                      <Link
                        className="color-gray-700 text-sm mr-15"
                        href={{
                          pathname: '/tag/[...slug]',
                          params: { slug: [tag.label] },
                        }}
                        key={tag.label}>
                        #{tag.label}
                      </Link>
                    ))
                    : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={postResponse.meta.currentPage}
        pageSize={postResponse.meta.itemsPerPage}
        totalCount={postResponse.meta.totalItems}
      />
    </div>
  );
};

export default BlogList;
