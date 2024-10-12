'use server';

import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/constant/pagination';
import { getPost } from '@/data/service/Post/getPost';

export async function fetchPosts({ page = DEFAULT_PAGE }: { page?: number }) {
  const { items, meta } = await getPost({
    page,
    limit: DEFAULT_LIMIT,
  });

  return { items, meta };
}
