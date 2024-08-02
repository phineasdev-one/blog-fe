import { useMemo } from 'react';

import useMediaQuery from './useMediaQuery';

import { SCREEN_SIZE } from '@/utils/screen';

export const DOTS = '...';
const PAGE_NUMBER_NEAR_DISPLAY = 1;

type Pagination = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage,
}: Pagination) => {
  const isMobile = useMediaQuery(SCREEN_SIZE.MOBILE);

  const paginationList = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const list = [];

    let startPage = currentPage - PAGE_NUMBER_NEAR_DISPLAY;
    let endPage = currentPage + PAGE_NUMBER_NEAR_DISPLAY;

    if (startPage <= 0) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > totalPageCount) {
      startPage -= endPage - totalPageCount;
      endPage = totalPageCount;

      if (startPage <= 0) {
        startPage = 1;
      }
    }

    if (startPage > 2 && !isMobile) {
      list.push(1, 2);
      if (startPage > 3) {
        list.push(DOTS);
      }
    } else {
      if (startPage > 3) {
        list.push(1, DOTS);
        if (startPage > 50) {
          // eslint-disable-next-line no-self-assign
          startPage = startPage;
          endPage = endPage - 1;
        } else {
          startPage = startPage + 1;
        }
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      list.push(i);
    }

    if (endPage < totalPageCount - 1) {
      list.push(DOTS);
    }

    if (endPage < totalPageCount) {
      list.push(totalPageCount);
    }

    return list;
  }, [totalCount, pageSize, currentPage, isMobile]);

  return paginationList;
};
