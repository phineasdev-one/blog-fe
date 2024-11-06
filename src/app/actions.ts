'use server';

import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/constant/pagination';
import { getPost } from '@/data/service/Post/getPost';
import { getPostByTag } from '@/data/service/Post/getPostByTag';
import { getTopArticles } from '@/data/service/Post/getTopArticles';

export async function fetchPosts({ page = DEFAULT_PAGE }: { page?: number }) {
  const { items, meta } = await getPost({
    page,
    limit: DEFAULT_LIMIT,
  });

  return { items, meta };
}

export async function fetchPostsByTag({
  tagName,
}: {
  page?: number;
  tagName: string;
}) {
  const { items, meta } = await getPostByTag({
    tagName,
    pagination: {
      page: 100,
      limit: DEFAULT_LIMIT,
    },
  });

  return { items, meta };
}

export async function fetchTopArticles({
  page = DEFAULT_PAGE,
}: {
  page?: number;
}) {
  const { items, meta } = await getTopArticles({
    page,
    limit: DEFAULT_LIMIT,
  });

  return { items, meta };
}
