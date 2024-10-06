// eslint-disable-next-line import/order
import { Inter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/configs/lib/css/style.css';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { ReactQueryClientProvider } from '@/components/elements/ReactQueryProvider';
import Layout from '@/components/layout/Layout';
import PreLoader from '@/components/layout/Preloader';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'Phineas blog',
  description: 'Phineas dev - Personal blog - Portfolio',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/deqzndnjs/image/upload/v1708938219/208b2fa1-80a6-4ee7-8874-fb0da5f13300.png',
      },
    ],
  },
};

const inter = Inter({ subsets: ['latin'] });

const locales = ['vi', 'en'];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  if (!locales.includes(locale)) notFound();

  return (
    <ReactQueryClientProvider>
      <html lang={locale} suppressHydrationWarning={true}>
        <body className={inter.className}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <PreLoader />
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </NextIntlClientProvider>
          {/* Using with portal */}
          <div id="message" />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
