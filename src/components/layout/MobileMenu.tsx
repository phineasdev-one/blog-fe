import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Link } from '@/utils/navigate';

type Props = {
  openClass: string;
  onClose: () => void;
};

const MobileMenu: FC<Props> = ({ openClass, onClose }) => {
  const t = useTranslations();

  return (
    <div
      className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-content-area">
          <div className="mobile-logo border-gray-800">
            <Link className="d-flex" href="/" onClick={onClose}>
              <img
                className="logo-night"
                alt="Phineas tran"
                src="/assets/imgs/template/logo.svg"
              />
              <img
                className="d-none logo-day"
                alt="Phineas tran"
                src="/assets/imgs/template/logo-day.svg"
              />
            </Link>
          </div>
          <div className="perfect-scroll">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav className="mt-15">
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link href="/" onClick={onClose}>
                      {t('ui.header.home')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-me" onClick={onClose}>
                      {t('ui.header.aboutMe')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" onClick={onClose}>
                      {t('ui.header.blog')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={onClose}>
                      {' '}
                      {t('ui.header.contact')}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="site-copyright color-gray-400 mt-30">
              Copyright 2024 © Phineas - Personal Blog.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
