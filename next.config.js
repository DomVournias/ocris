/** @type {import('next').NextConfig} */

const { withNextVideo } = require("next-video/process");

// const nextConfig = {
//   images: {
//     remotePatterns: [{ hostname: "dev-ocris.healthmore.gr" }],
//   },
// };

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "dev-ocris.healthmore.gr" }],
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = withNextVideo(nextConfig);
