/* eslint-disable @typescript-eslint/no-var-requires */

import { Config } from '@/configs/types';

const config: Config = {
  api: {
    origin: process.env.NEXT_PUBLIC_API_URL as string,
  },
};

export default config;
