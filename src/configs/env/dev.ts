/* eslint-disable @typescript-eslint/no-var-requires */

import { Config } from '@/configs/types';

const config: Config = {
  api: {
    origin: process.env.VITE_NODE_API as string,
  },
};

export default config;
