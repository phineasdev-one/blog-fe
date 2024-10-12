// eslint-disable-next-line import/order
import { Inter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/configs/lib/css/style.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <PreLoader />
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
        <div id="message" />
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
