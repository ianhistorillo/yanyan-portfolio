/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.boxcloud.com",
        port: "",
        pathname: "/api/2.0/internal_files/**",
      },
    ],
  },
};

export default nextConfig;
