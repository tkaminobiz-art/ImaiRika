/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  // Vercel では standalone を付けない（Docker 向け。付けると 404 になることがある）
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
