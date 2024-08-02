import { useTranslations } from 'next-intl';

import { Link } from '@/utils/navigate';

export default function Page404() {
  const t = useTranslations();

  return (
    <div className="cover-home3 shadow-page-404">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 ml-auto mr-auto">
            <div className="box-page-404">
              <div className="text-center mb-150 mt-100">
                <div className="box-404 row">
                  <div className="col-lg-6">
                    <div className="image-404">
                      <img src="../assets/imgs/page/404/404.svg" alt="Phieas" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info-404 text-start mt-60">
                      <h2 className="color-linear mb-20">
                        {t('page.notFound.title')}
                      </h2>
                      <p className="text-xl color-gray-500">
                        {t('page.notFound.description')}
                      </p>
                      <div className="mt-25">
                        <Link className="btn btn-linear hover-up" href="/">
                          {t('ui.header.home')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
