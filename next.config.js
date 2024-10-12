/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      // Bạn có thể thêm nhiều cấu hình rewrites khác ở đây
      {
        source: '/ve-toi',
        destination: '/about-me',
      },
      {
        source: '/bai-viet/:slug',
        destination: '/blog/:slug',
      },
      {
        source: '/bai-viet',
        destination: '/blog',
      },
      {
        source: '/danh-muc/:slug',
        destination: '/category/:slug',
      },
      {
        source: '/lien-he',
        destination: '/contact',
      },
    ];
  },
};

// @ts-check
module.exports = nextConfig;
