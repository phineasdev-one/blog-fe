'use client';
import Link from 'next/link';
import { FC } from 'react';

import { DOTS, usePagination } from '@/hooks/usePagination';

type Props = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
};

/** Pagination component */
export const Pagination: FC<Props> = ({
  currentPage,
  totalCount,
  pageSize,
}) => {
  const paginationRange: (number | string)[] = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <nav className="mb-50">
      <ul className="pagination">
        {currentPage - 1 > 0 && (
          <li
            className="page-item wow animate__animated animate__fadeIn"
            data-wow-delay=".0s">
            <Link
              className="page-link page-prev"
              href={`?page=${currentPage - 1}`}>
              <i className="fi-rr-arrow-small-left" />
            </Link>
          </li>
        )}

        {paginationRange?.map((pageNumber: string | number, index) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={index}
                className="page-item wow animate__animated animate__fadeIn"
                data-wow-delay=".4s">
                <Link className="page-link" href="#">
                  ...
                </Link>
              </li>
            );
          }

          if (typeof pageNumber === 'number') {
            return (
              <li
                key={index}
                className={`page-item wow animate__animated animate__fadeIn ${
                  pageNumber === currentPage && 'active'
                }`}
                data-wow-delay=".1s">
                <Link className={`page-link`} href={`?page=${pageNumber}`}>
                  {pageNumber}
                </Link>
              </li>
            );
          }
        })}

        {currentPage !== lastPage && (
          <li
            className="page-item wow animate__animated animate__fadeIn"
            data-wow-delay=".5s">
            <Link
              className="page-link page-next"
              href={`?page=${currentPage + 1}`}>
              <i className="fi-rr-arrow-small-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
