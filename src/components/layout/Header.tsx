import { FC } from 'react';

import SwitchButton from '@/components/elements/SwitchButton';
import Link from 'next/link';

type Props = {
  handleOpen: () => void;
  handleRemove: () => void;
  openClass: string;
};

const Header: FC<Props> = ({ handleOpen, handleRemove, openClass }) => {
  return (
    <header className={'header sticky-bar bg-gray-900'}>
      <div className="container">
        <div className="main-header">
          <div className="header-logo">
            <Link className="d-flex" href="/">
              <img
                className="logo-night"
                alt="Phinineas Tran"
                src="/assets/imgs/template/logo.svg"
              />
              <img
                className="d-none logo-day"
                alt="Phinineas Tran"
                src="/assets/imgs/template/logo-day.svg"
              />
            </Link>
          </div>
          <div className="header-nav">
            <nav className="nav-main-menu d-none d-xl-block">
              <ul className="main-menu">
                <li>
                  <Link className="color-gray-500" href="/">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link className="color-gray-500" href="/ve-toi">
                    Về tôi
                  </Link>
                </li>
                <li>
                  <Link className="color-gray-500" href="/bai-viet">
                    Bài viết
                  </Link>
                  {/* <ul className="sub-menu two-col">
                    <li>
                      <Link className="color-gray-500" href="/blog">
                        Blog Category 1
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link className="color-gray-500" href="/lien-he">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={`burger-icon burger-icon-white ${openClass && 'burger-close'
                }`}
              onClick={() => {
                handleOpen();
                handleRemove();
              }}>
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="header-right text-end">
            <SwitchButton />
            {/* <div
              className={
                isToggled
                  ? 'form-search p-20 d-block'
                  : ' form-search p-20 d-none'
              }>
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <input className="btn-search-2" />
              </form>
              <div className="popular-keywords text-start mt-20">
                <p className="mb-10 color-white">Popular tags:</p>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Travel,
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Tech,
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Movie
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Lifestyle
                </Link>
                <Link className="color-gray-600 mr-10 font-xs" href="#">
                  # Sport
                </Link>
              </div>
            </div> */}

            {/* <Link
              className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
              href="/">
              Dang Nhap
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
