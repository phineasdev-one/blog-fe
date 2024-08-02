// Refactor old http fetch

function generateFetch(baseURL: string) {
  const accessToken: string | null = null;

  // TODO: Implement access token later

  const getApiResponse = async <T>({
    apiEndpoint,
    requestData,
    method = 'GET',
    revalidate = process.env.NODE_ENV === 'production' ? 3600 : 120, // Cache data in seconds
    headers,
  }: {
    apiEndpoint: string;
    requestData?: BodyInit;
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
    revalidate?: number;
    headers?: HeadersInit;
  }) => {
    try {
      const customHeader = {
        ...headers,
        'Content-Type': 'application/json',
      };

      const response = await fetch(baseURL + apiEndpoint, {
        method,
        body: requestData,
        headers: customHeader,
        next: {
          revalidate,
        },
      });

      if (!response.ok) {
        throw new Error(
          `${response.status}/${response.statusText} - ${apiEndpoint}`,
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      throw error;
    }
  };

  return {
    getApiResponse,
    accessToken,
  };
}

// TODO: You might get it from env
export const httpFetch = generateFetch('http://localhost:3001');
