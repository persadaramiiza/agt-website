/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: false,
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
    ],
  },
  webpack: (config) => config,
};

export default nextConfig;
