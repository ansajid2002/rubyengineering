/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        // HOMEURL: process.env.HOMEURL,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
      experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;  