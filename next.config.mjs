import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  sassOptions: {
    additionalData: '@import "@/styles/main.scss";',
  },
};

// export default nextConfig;

// module.exports = withContentLayer(nextConfig);

export default withContentlayer(nextConfig);
