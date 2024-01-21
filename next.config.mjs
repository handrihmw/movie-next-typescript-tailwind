/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
