import { ChildProps } from '@/types/common';
import Link from 'next/link';
import { FC } from 'react';

const Breadcrumb: FC<ChildProps & { title: string }> = ({ title }) => {
  return (
    <ul className="breadcrumb">
      <li>
        <Link className="home" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/blog-archive">Blog</Link>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};
export default Breadcrumb;
