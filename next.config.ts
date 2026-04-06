/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Bạn có thể thêm pathname: '/images/**' để cụ thể hơn
      },
    ],
  },
  // Giữ nguyên các phần ignore lỗi build trước đó
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;