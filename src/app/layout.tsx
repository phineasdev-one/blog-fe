import { Inter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/configs/lib/css/style.css';
import { ThemeProvider } from '@/components/adapter/ThemeContext';
import Layout from '@/components/layout/Layout';
import PreLoader from '@/components/layout/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreLoader />
        <ThemeProvider children={<Layout>{children}</Layout>} />
      </body>
    </html>
  );
}
