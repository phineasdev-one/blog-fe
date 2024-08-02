import { GetTagResponse } from '@/data/model/Tag/tag';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/tags';

export const getTags = (): Promise<GetTagResponse> => {
  return httpFetch.get({ endpoint: API_ENDPOINT });
};
