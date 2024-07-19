/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-cdf6484754244f30b7639332dce2c1b5.r2.dev", // url hostname of your images bucket
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
