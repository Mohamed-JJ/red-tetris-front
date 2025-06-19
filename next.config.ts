import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };
    return config;
  },
};

export default nextConfig;
