/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "dev-ocris.healthmore.gr" }],
  },
};

export default nextConfig;
