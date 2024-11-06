'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { fetchTopArticles } from '@/app/actions';
import ImageWithSkeleton from '@/components/elements/Image';
import LoadingText from '@/components/elements/LoadingText';
import { Post } from '@/data/model/Post/post';
import { ApiMeta } from '@/types/common';

type Props = {
  postsInitial: Post[];
  metaInfo: ApiMeta;
};

const EditorPicked: FC<Props> = ({ postsInitial, metaInfo }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(postsInitial);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadPost = async () => {
    try {
      setIsLoading(true);
      const next = page + 1;
      const postResponse = await fetchTopArticles({ page: next });

      if (postResponse.items.length) {
        setPage(next);
        setPosts((prev) => [
          ...(prev.length ? prev : []),
          ...postResponse.items,
        ]);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ableToHideMoreButton = posts.length === metaInfo.totalItems;

  return (
    <>
      <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
        Bài viết nổi bật
      </h2>
      <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
        Các bài viết nổi bật mà admin chọn
      </p>
      <div className="row mt-70">
        {posts.map((post, i) => (
          <div
            className="col-lg-4 wow animate__animated animate__fadeIn"
            data-wow-delay=".1s"
            key={i}>
            <div className="card-blog-1 hover-up">
              <div className="card-image mb-20 mh-200 bdr-16 ">
                <Link className="post-type" href={`/bai-viet/${post.slug}`} />
                <Link href={`/bai-viet/${post.slug}`}>
                  <ImageWithSkeleton src={post.poster} alt={post.title} />
                </Link>
              </div>
              <div className="card-info">
                <div className="row">
                  <div className="col-7">
                    <Link
                      className="color-gray-700 text-sm"
                      href={`/danh-muc/${post.category.name}`}>
                      {post.category?.name || <Skeleton />}
                    </Link>
                  </div>
                  <div className="col-5 text-end">
                    <span className="color-gray-700 text-sm timeread">
                      {/* {t('ui.post.durationTime', { time: post.duration })} */}
                    </span>
                  </div>
                </div>
                <Link href={`/bai-viet/${post.slug}`}>
                  <h6 className="color-white mt-20" style={{ height: '45px' }}>
                    {post.title || <Skeleton />}
                  </h6>
                </Link>
                <div className="row align-items-center mt-25">
                  <div className="col-7">
                    <div className="box-author">
                      <img
                        src="assets/imgs/page/homepage1/author3.png"
                        alt="Phineas"
                      />
                      <div className="author-info">
                        <h6 className="color-gray-700">#Phineas</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <Link
                      className="readmore color-gray-500 text-sm"
                      href={`/bai-viet/${post.slug}`}>
                      <span>Đọc thêm</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isLoading && <LoadingText />}
      {!ableToHideMoreButton && (
        <div className="text-center mb-50">
          <button
            className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
            onClick={handleLoadPost}>
            Hiển thị thêm
            <i className="fi-rr-arrow-small-right" />
          </button>
        </div>
      )}
    </>
  );
};

export default EditorPicked;
