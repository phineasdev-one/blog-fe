import { fetchPosts } from '@/app/[locale]/actions';
import Sidebar2 from '@/components/layout/Sidebar2';
import BlogList from '@/components/page/blog/BlogList';
import { DEFAULT_PAGE } from '@/constant/pagination';
import { getCategories } from '@/data/service/Category/getCategory';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Blogs',
  description: 'The best blog app!',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/deqzndnjs/image/upload/v1708938219/208b2fa1-80a6-4ee7-8874-fb0da5f13300.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === 'string'
      ? Number(searchParams.page)
      : DEFAULT_PAGE;

  const [postResponse, categories] = await Promise.all([
    fetchPosts({ page }),
    getCategories(),
  ]);

  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            <div className="box-list-posts mt-40">
              <div className="row">
                <Suspense fallback={<Loading />}>
                  <BlogList postResponse={postResponse} />
                </Suspense>
                <div className="col-lg-4">
                  <Sidebar2 categories={categories} />
                </div>
              </div>
            </div>
            <div className="mb-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
