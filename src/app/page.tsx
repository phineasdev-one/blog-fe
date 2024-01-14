import Sidebar from '@/components/layout/Sidebar';
import EditorPicked from '@/components/sections/EditorPicked';
import Hero1 from '@/components/sections/Hero1';
import PopularCategories from '@/components/sections/PopularCategories';
import RecentPosts from '@/components/sections/RecentPosts';
import HotTopic from '@/components/slider/HotTopic';

export default function Home() {
  return (
    <div className="cover-home1">
      <div className="container">
        <div className="row">
          <div className="col-xl-1" />
          <div className="col-xl-10 col-lg-12">
            {/* Can choose other option */}
            <Hero1 />
            <HotTopic />
            <EditorPicked />
            <PopularCategories />
            <div className="row mt-70">
              <div className="col-lg-8">
                <RecentPosts />
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
