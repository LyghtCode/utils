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
      {
        source: "/rpc/polygon",
        destination: "https://polygon-mainnet.g.alchemy.com/v2/HHfOFn8jsYguteTVvL0cz4g9aydrbjTV",
      },
    ];
  },
};

module.exports = nextConfig;
