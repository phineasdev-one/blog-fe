import { FC } from 'react';

import { ChildProps } from '@/types/common';
import Link from 'next/link';

const Breadcrumb: FC<ChildProps & { title: string }> = ({ title }) => {
  return (
    <ul className="breadcrumb">
      <li>
        <Link className="home" href="/">
          Trang chủ
        </Link>
      </li>
      <li>
        <Link href="/bai-viet">Bài viết</Link>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};
export default Breadcrumb;
