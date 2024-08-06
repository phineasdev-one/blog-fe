import { Metadata, ResolvingMetadata } from 'next';
import React, { FC } from 'react';

import Breadcrumb from '@/components/elements/Breadcrumb';
import Comments from '@/components/elements/Comment';
import ImageWithSkeleton from '@/components/elements/Image';
import SingleContent from '@/components/sections/SingleContent';
import { getPostDetail } from '@/data/service/Post/getPostDetail';
import { formatDateTime } from '@/utils/dateTime';

type Props = { params: { slug: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const postDetail = await getPostDetail({ slug });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://phineasdev.one'),
    title: postDetail.title,
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: postDetail.title,
      description: postDetail.shortDescription,
      siteName: 'Phineas blog',
      images: [
        {
          url: postDetail?.poster ?? previousImages,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const BlogDetailScreen: FC<Props> = async ({ params }) => {
  const { slug } = params;

  const postDetail = await getPostDetail({ slug });

  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            <div className="pt-30 border-bottom border-gray-800 pb-20">
              <div className="box-breadcrumbs">
                <Breadcrumb title={postDetail.title} />
              </div>
            </div>
            <div className="row mt-50 align-items-end">
              <div className="col-lg-8 m-auto text-center">
                <h3 className="color-linear">{postDetail.title}</h3>
              </div>
            </div>
            <div className="row mt-30 main-content">
              <div className="col-lg-12">
                <div className="image-detail mb-20 justify-content-center d-flex">
                  <ImageWithSkeleton
                    className="image-detail mb-20 justify-content-center d-flex bdrd16"
                    src={postDetail.poster}
                    alt={postDetail.title}
                  />
                </div>
              </div>
              <div className="col-lg-10 m-auto">
                <div className="row mb-40">
                  <div className="col-md-6 mb-10">
                    <div className="box-author">
                      <img
                        src="/assets/imgs/page/homepage1/author3.png"
                        alt="Phineas"
                      />
                      <div className="author-info">
                        <h6 className="color-gray-700">Phineas</h6>
                        <span className="color-gray-700 text-sm mr-30">
                          {formatDateTime(postDetail.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 text-start text-md-end">
                    <div className="d-inline-block pt-10">
                      <div className="d-flex align-item-center">
                        <h6 className="d-inline-block color-gray-500 mr-10">
                          Share
                        </h6>
                        <Link className="icon-media icon-fb" href="#" />
                        <Link className="icon-media icon-tw" href="#" />
                        <Link
                          className="icon-media icon-printest"
                          href="#"></Link>
                      </div>
                    </div>
                  </div> */}
                </div>
                <SingleContent
                  content={postDetail.content}
                  tags={postDetail?.tags ?? []}
                />
                <Comments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailScreen;
