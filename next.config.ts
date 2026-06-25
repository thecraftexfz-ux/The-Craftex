/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap']
  }
};

export default nextConfig;

