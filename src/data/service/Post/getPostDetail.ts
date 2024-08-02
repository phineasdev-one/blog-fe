import { GetPostDetailResponse } from '@/data/model/Post/post';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/post/detail';

export const getPostDetail = (request: {
  slug: string;
}): Promise<GetPostDetailResponse> => {
  return httpFetch.get({
    endpoint: API_ENDPOINT,
    request,
    cache: 'force-cache',
    next: { revalidate: 120 },
  });
};
