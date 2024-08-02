import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Tag } from '@/data/model/Tag/tag';

type Props = {
  tags: Tag[];
};

const PopularCategories: FC<Props> = ({ tags }) => {
  const t = useTranslations();

  return (
    <>
      <div className="mt-30">
        <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
          {t('page.home.popularTag.title')}
        </h2>
        <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
          {t('page.home.popularTag.description')}
        </p>
        <div className="row mt-70 mb-50">
          {tags?.map((tag, index) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              key={index}>
              <div
                className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn"
                data-wow-delay={`${index / 10}s`}>
                <div className="card-image">
                  {/* <Link
                    href={{
                      pathname: '/tag/[...slug]',
                      params: { slug: [tag.label] },
                    }}> */}
                  <img src={tag.thumbnail} alt={tag.label} />
                  {/* </Link> */}
                </div>
                <div className="card-info">
                  {/* <Link
                    className="color-gray-500"
                    href={{
                      pathname: '/tag/[...slug]',
                      params: { slug: [tag.label] },
                    }}> */}
                  {tag.label}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
