import axios, { AxiosInstance, CancelToken } from 'axios';

import configs from '@/configs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ApiRequest {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ApiResponse {}
interface ApiParams {
  lang: string;
}

/** Request options */
type RequestOptions<P extends ApiParams> = {
  params?: P;
  cancelToken?: CancelToken;
  token?: string;
};

/**
 * Initialization authenticate
 * @returns
 */
function generateClient(host: string) {
  /**
   * Default http GET parameters
   * @returns
   */
  function getDefaultParams(): ApiParams {
    return {
      lang: 'en',
    };
  }

  /**
   * Validate response status
   * @param status {number}
   * @returns {boolean}
   */
  function validateStatus(status: number): boolean {
    return status >= 200 && status < 400;
  }

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: host,
    validateStatus,
  });

  axiosInstance.interceptors.request.use(
    async (req) => {
      return req;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  /**
   * Validate response
   * @returns
   */
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  /**
   * Logout function
   * @returns
   */
  function logout() {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${null}`;
  }

  /**
   * GET method
   * @param {string} path - path after domain
   * @param {T} [request] - get parameters
   * @param {RequestOptions<P>} [options]  - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function get<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams,
  >(path: string, request?: T, options?: RequestOptions<P>): Promise<R> {
    return axiosInstance
      .get(encodeURI(path), {
        params: {
          ...getDefaultParams(),
          ...request,
          ...options?.params,
        },
        headers: options?.token
          ? { Authorization: `Bearer ${options?.token}` }
          : {},
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * GET SSR method
   * @param {string} path - path after domain
   * @param {T} [request] - get parameters
   * @param {RequestOptions<P>} [options]  - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function getSSR<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams,
  >(path: string, request?: T, options?: RequestOptions<P>): Promise<R> {
    return axiosInstance
      .get(encodeURI(path), {
        params: {
          ...getDefaultParams(),
          ...request,
          ...options?.params,
        },
        headers: { Authorization: `Bearer ${options?.token}` },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * POST method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function post<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams,
  >(path: string, request: T, options?: RequestOptions<P>): Promise<R> {
    return axiosInstance
      .post(path, request, {
        params: {
          ...getDefaultParams(),
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * PUT method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function put<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams,
  >(path: string, request: T, options?: RequestOptions<P>): Promise<R> {
    return axiosInstance
      .put(path, request, {
        params: {
          ...getDefaultParams(),
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  /**
   * DELETE method
   * @param {string} path - path after domain
   * @param {T} request - request body
   * @param {RequestOptions<P>} [options] - http request options
   * @returns {Promise<R>} api response
   * @template T, R, P
   */
  async function deleteRequest<
    T extends ApiRequest,
    R extends ApiResponse,
    P extends ApiParams = ApiParams,
  >(path: string, request?: T, options?: RequestOptions<P>): Promise<R> {
    return axiosInstance
      .delete(path, {
        data: request,
        params: {
          ...getDefaultParams(),
          ...options?.params,
        },
        cancelToken: options?.cancelToken,
      })
      .then((response) => response.data);
  }

  return {
    get,
    put,
    post,
    logout,
    getSSR,
    delete: deleteRequest,
  };
}

export const httpClient = generateClient(configs.api.origin);
