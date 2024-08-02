import { GetPostRequest, GetPostResponse } from '@/data/model/Post/post';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/post';

export const getPost = (request: GetPostRequest): Promise<GetPostResponse> => {
  return httpFetch.get({ endpoint: API_ENDPOINT, request, cache: 'no-store' });
};
