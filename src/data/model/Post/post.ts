import { Category } from '@/data/model/Category/category';
import { Tag } from '@/data/model/Tag/tag';
import { ApiMeta, ApiPaging } from '@/types/common';

export type Author = {
  fullName: string;
};

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  poster: string;
  published: boolean;
  slug: string;
  tags: Tag[];
  readDuration: number;
  author: Author;
  category: Category;
  createdAt: string;
  content: string;
};

export type GetPostResponse = {
  items: Post[];
  meta: ApiMeta;
};

export type GetPostRequest = ApiPaging;

export type GetPostByCategoryResponse = Category & { posts: Post[] };

export type GetPostByCategoryRequest = {
  categoryName: string;
};

export type GetPostByTagRequest = {
  tagName: string;
  pagination?: ApiPaging;
};

export type GetPostDetailResponse = Post;
