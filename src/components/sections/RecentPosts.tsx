import { FC } from 'react';

import ImageWithSkeleton from '@/components/elements/Image';
import { Post } from '@/data/model/Post/post';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const RecentPosts: FC<Props> = ({ posts }) => {
  return (
    <>
      <h2 className="color-linear d-inline-block mb-10">
        Bài đăng gần đây
      </h2>
      <p className="text-lg color-gray-500">
        Đừng bỏ lỡ tin tức gần đây
      </p>
      <div className="box-list-posts mt-70">
        {posts.slice(0, 6).map((post, index) => (
          <div
            className="card-list-posts wow animate__animated animate__fadeIn"
            key={index}
            data-wow-delay={`${index / 10}s`}>
            <div className="card-image hover-up">
              <Link
                href={`/bai-viet/${post.slug}`}>
                <ImageWithSkeleton src={post.poster} alt={post.title} />
              </Link>
            </div>
            <div className="card-info">
              <Link
                className="btn btn-tag bg-gray-800 hover-up"
                href={`/danh-muc/${post.category.name}`}>
                {post.category.name}
              </Link>
              <Link
                href={`/bai-viet/${post.slug}`}>
                <h4 className="mt-15 mb-20 color-white"> {post.title}</h4>
              </Link>
              <p className="color-gray-500">{post.shortDescription}</p>
              <div className="row mt-20">
                <div className="col-7">
                  {post.tags
                    ? post.tags.map((tag) => (
                      <Link
                        className="color-gray-700 text-sm mr-15"
                        href={`/tag/${tag.label}`}
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
    </>
  );
};

export default RecentPosts;
