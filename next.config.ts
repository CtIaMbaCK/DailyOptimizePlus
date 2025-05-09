/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Chỉ kiểm tra trong quá trình phát triển, không kiểm tra khi build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tương tự, bỏ qua lỗi TypeScript khi build để tăng tốc
    ignoreBuildErrors: true,
  },
  poweredByHeader: false, // Tắt header X-Powered-By
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Thêm các domain nếu bạn tải hình ảnh từ bên ngoài
  },
  // Di chuyển output ra ngoài - đây là cấu hình ở cấp cao nhất
  output: 'standalone',
};

export default nextConfig;