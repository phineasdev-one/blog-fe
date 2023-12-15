import dev from './env/dev';
import prod from './env/prod';
import stg from './env/stg';
import { Config } from './types';

const env = process.env.PUBLIC_ENV || 'dev';

const getConfig = (): Config => {
  if (env === 'prod') {
    return prod;
  }

  if (env === 'stg') {
    return stg;
  }

  return dev;
};

export default getConfig();
