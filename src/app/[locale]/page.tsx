import { Metadata } from 'next';
import { Suspense } from 'react';

import { fetchPosts } from './actions';

import Sidebar2 from '@/components/layout/Sidebar2';
import EditorPicked from '@/components/sections/EditorPicked';
import Hero1 from '@/components/sections/Hero1';
import PopularCategories from '@/components/sections/PopularCategories';
import RecentPosts from '@/components/sections/RecentPosts';
import HotTopic from '@/components/slider/HotTopic';
import { getCategories } from '@/data/service/Category/getCategory';
import { getTags } from '@/data/service/Tag/getTag';
import 'react-loading-skeleton/dist/skeleton.css';

export const metadata: Metadata = {
  title: 'Phineas blog',
  description: 'Phineas dev - Personal blog - Portfolio',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/deqzndnjs/image/upload/v1708938219/208b2fa1-80a6-4ee7-8874-fb0da5f13300.png',
      },
    ],
  },
};

export default async function Home() {
  const [categories, postResponse, tags] = await Promise.all([
    getCategories(),
    fetchPosts({ page: 1 }),
    getTags(),
  ]);

  return (
    <div className="cover-home1">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            {/* Can choose other option */}
            <Suspense fallback={<p>Loading.....</p>}>
              <Hero1 />
            </Suspense>
            <HotTopic categories={categories} />
            <EditorPicked
              postsInitial={postResponse.items}
              metaInfo={postResponse.meta}
            />
            <PopularCategories tags={tags} />
            <div className="row mt-70">
              <div className="col-lg-8">
                <RecentPosts posts={postResponse?.items} />
              </div>
              <div className="col-lg-4">
                <Sidebar2 categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
