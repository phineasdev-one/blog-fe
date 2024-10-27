import { GetPostByTagRequest, GetPostResponse } from '@/data/model/Post/post';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/tags';

export const getPostByTag = (
  request: GetPostByTagRequest,
): Promise<GetPostResponse> => {
  return httpFetch.get({
    endpoint: `${API_ENDPOINT}/${request.tagName}/posts`,
    cache: 'no-store',
    request,
  });
};
