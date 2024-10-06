import configs from '@/configs';

// Define a type for custom headers
type CustomHeaders = {
  'Content-Type'?: string;
  Authorization?: string;
  [key: string]: string | undefined; // Allow other headers to be added
};

// Function to generate a fetch client with a base URL and token management
function generateFetch(baseURL: string) {
  let accessToken: string | null = null;

  // Function to update the access token if needed
  const setAccessToken = (token: string) => {
    accessToken = token;
  };

  const getApiResponse = async <T>({
    apiEndpoint,
    requestData,
    method = 'GET',
    revalidate = process.env.NODE_ENV === 'production' ? 3600 : 120, // Cache data in seconds
    headers = {},
    queryParams = {},
  }: {
    apiEndpoint: string;
    requestData?: BodyInit | null; // Allow null for GET requests
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
    revalidate?: number;
    headers?: CustomHeaders; // Use the custom header type
    queryParams?: Record<string, string | number>; // New parameter for query strings
  }): Promise<T> => {
    try {
      // Construct the request headers
      const customHeaders: CustomHeaders = {
        'Content-Type': 'application/json',
        ...headers,
      };

      // If we have an access token, add it to the Authorization header
      if (accessToken) {
        customHeaders.Authorization = `Bearer ${accessToken}`;
      }

      // Create the full URL with query parameters for GET requests
      const fullUrl = new URL(baseURL + apiEndpoint);
      if (method === 'GET' && queryParams) {
        Object.keys(queryParams).forEach((key) => {
          if (queryParams[key] !== undefined) {
            fullUrl.searchParams.append(key, String(queryParams[key]));
          }
        });
      }

      // Only send the body if the request method allows it (not for GET)
      const fetchOptions: RequestInit = {
        method,
        headers: customHeaders as HeadersInit, // Cast to HeadersInit
        next: { revalidate },
        body: method !== 'GET' && requestData ? requestData : null,
      };

      // Fetching the data from the API
      const response = await fetch(fullUrl.toString(), fetchOptions);

      // Error handling for non-2xx responses
      if (!response.ok) {
        throw new Error(
          `Error ${response.status} (${response.statusText}): ${apiEndpoint}`,
        );
      }

      // Return the parsed JSON data
      return (await response.json()) as T;
    } catch (error) {
      // Enhanced error logging for better debugging
      throw error; // Re-throw error to allow caller to handle it
    }
  };

  return {
    getApiResponse,
    setAccessToken, // Allow external code to update the access token
  };
}

// TODO: Use actual base URL from the config/env variables
export const httpClient = generateFetch(configs.api.origin);
