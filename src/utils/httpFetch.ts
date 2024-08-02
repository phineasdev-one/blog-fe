/* eslint-disable @typescript-eslint/no-explicit-any */
import configs from '@/configs';

type FetchOptions = {
  method: string;
  headers?: Record<string, any>;
  body?: string;
  customOptions?: Record<string, string>; // Allow custom option
  cache?: 'force-cache' | 'no-store';
  next?: {
    revalidate?: number;
  };
};

type Get = {
  endpoint: string;
  request?: Record<string, any>;
  options?: Omit<FetchOptions, 'customOptions'>;
  cache?: 'force-cache' | 'no-store';
  next?: {
    revalidate?: number;
  };
};

function generateFetch(baseURL: string) {
  let accessToken: string | null = null;

  async function fetchData<T>(
    method: string,
    endpoint: string,
    requestData?: T,
    options?: FetchOptions,
  ): Promise<T> {
    const url: string = `${baseURL}${endpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const fetchOptions: FetchOptions = {
      method,
      headers,
      ...options, // Include custom options
    };

    if (method !== 'GET' && requestData) {
      fetchOptions.body = JSON.stringify(requestData);
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        cache: fetchOptions.cache,
        next: fetchOptions.next,
      });

      return response.json();
    } catch (error) {
      throw error;
    }
  }

  const setAccessToken = (token: string): void => {
    accessToken = token;
  };

  const get = async <T = null>({
    cache,
    endpoint,
    options,
    request,
  }: Get): Promise<T> => {
    const mergedOptions: FetchOptions = {
      ...options,
      customOptions: request,
      method: 'GET',
      cache,
      next: options?.next,
    };

    // Construct the full endpoint with query parameters
    const queryString = new URLSearchParams(request).toString();
    const fullEndpoint = queryString ? `${endpoint}?${queryString}` : endpoint;

    return fetchData<T>('GET', fullEndpoint, undefined, mergedOptions);
  };

  const post = async <T>(
    endpoint: string,
    requestData?: T,
  ): Promise<T | null> => fetchData('POST', endpoint, requestData);

  const put = async <T>(endpoint: string, requestData?: T): Promise<T | null> =>
    fetchData('PUT', endpoint, requestData);

  const patch = async <T>(
    endpoint: string,
    requestData?: T,
  ): Promise<T | null> => fetchData('PATCH', endpoint, requestData);

  const deleteRequest = async <T>(endpoint: string): Promise<T | null> =>
    fetchData('DELETE', endpoint);

  return {
    get,
    put,
    post,
    patch,
    setAccessToken,
    delete: deleteRequest,
  };
}

export const httpFetch = generateFetch(configs.api.origin);
