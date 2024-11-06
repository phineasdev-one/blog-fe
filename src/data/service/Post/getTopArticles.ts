import { GetPostRequest, GetPostResponse } from '@/data/model/Post/post';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/post/topArticles';

export const getTopArticles = (
  request: GetPostRequest,
): Promise<GetPostResponse> => {
  return httpFetch.get({ endpoint: API_ENDPOINT, request, cache: 'no-store' });
};
