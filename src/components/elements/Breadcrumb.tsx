import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ChildProps } from '@/types/common';
import { Link } from '@/utils/navigate';

const Breadcrumb: FC<ChildProps & { title: string }> = ({ title }) => {
  const t = useTranslations();

  return (
    <ul className="breadcrumb">
      <li>
        <Link className="home" href="/">
          {t('ui.header.home')}
        </Link>
      </li>
      <li>
        <Link href="/blog"> {t('ui.header.blog')}</Link>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};
export default Breadcrumb;
