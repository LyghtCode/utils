/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/collect/:match*",
        destination: "https://api.mixpanel.com/:match*",
      },
    ];
  },
};

module.exports = nextConfig;
