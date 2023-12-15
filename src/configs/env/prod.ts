/* eslint-disable @typescript-eslint/no-var-requires */

import { Config } from '@/configs/types';

const config: Config = {
  api: {
    origin: 'https://example.co.jp/api',
  },
  language: 'en',
  banking: {
    saving: {
      bank: 'ไทยพาณิชย์ (SCB)',
      name: 'น.ส. รดามณี ศิริวรโชติ',
      accountNo: '859-2-81844-6',
      qrCode:
        'https://res.cloudinary.com/ddy85aplh/raw/upload/v1699931265/myp/1699931264685_o4i8au.png', // TODO: Can replace after confirmed
    },
    interestPay: {
      bank: 'ธนาคารกรุงทย KRUNGTHAI BANK',
      name: 'รดามณี ศิริวรโชติ',
      accountNo: '430-0-60641-2',
      qrCode:
        'https://res.cloudinary.com/ddy85aplh/raw/upload/v1700554794/myp/1700554794327_cr0gej.jpg', // TODO: Can replace after confirmed
    },
  },
};

export default config;
