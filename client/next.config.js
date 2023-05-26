/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["localhost", "learncodepath.tech"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT, // Exposed to client
    STRIPE_PUBLIC_TOKEN: process.env.STRIPE_PUBLIC_TOKEN, // Exposed to client
  },
};
