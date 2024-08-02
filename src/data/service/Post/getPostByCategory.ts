import {
  GetPostByCategoryRequest,
  GetPostByCategoryResponse,
} from '@/data/model/Post/post';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/categories';

export const getPostByCategory = (
  request: GetPostByCategoryRequest,
): Promise<GetPostByCategoryResponse> => {
  return httpFetch.get({
    endpoint: `${API_ENDPOINT}/${request.categoryName}/posts`,
    cache: 'no-store',
  });
};
