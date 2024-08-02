import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Category } from '@/data/model/Category/category';
import { Link } from '@/utils/navigate';

type Props = {
  categories: Category[];
};

const Sidebar2: FC<Props> = ({ categories }) => {
  const t = useTranslations();

  return (
    <div className="sidebar">
      <div className="box-sidebar bg-gray-850 border-gray-800">
        <div className="head-sidebar">
          <h5 className="line-bottom">{t('ui.category.title')}</h5>
        </div>
        <div className="content-sidebar">
          <div className="list-cats">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={{
                  pathname: '/category/[...slug]',
                  params: { slug: [category.name] },
                }}>
                <div
                  className="item-cats border-gray-800 wow animate__animated animate__fadeIn"
                  key={category.id}>
                  <div className="cat-left">
                    <div className="image-cat">
                      <img src={category.poster} alt={category.name} />
                    </div>
                    <div className="info-cat">{category.name}</div>
                  </div>
                  <div className="cat-right">{category.postCount}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
