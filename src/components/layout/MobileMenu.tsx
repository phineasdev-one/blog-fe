import Link from 'next/link';
import { FC } from 'react';

type Props = {
  openClass: string;
  onClose: () => void;
};

const MobileMenu: FC<Props> = ({ openClass, onClose }) => {
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
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link href="/ve-toi" onClick={onClose}>
                      Về tôi
                    </Link>
                  </li>
                  <li>
                    <Link href="/bai-viet" onClick={onClose}>
                      Bài viết
                    </Link>
                  </li>
                  <li>
                    <Link href="/lien-he" onClick={onClose}>
                      Liên hệ
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
