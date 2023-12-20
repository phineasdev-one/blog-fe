import { Inter } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/assets/css/style.css';
import Layout from '@/components/layout/Layout';

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
