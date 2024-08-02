import { GetCategoriesResponse } from '@/data/model/Category/category';
import { httpFetch } from '@/utils/httpFetch';

const API_ENDPOINT = '/v1/categories';

export const getCategories = (): Promise<GetCategoriesResponse> => {
  return httpFetch.get({ endpoint: API_ENDPOINT, cache: 'no-store' });
};
