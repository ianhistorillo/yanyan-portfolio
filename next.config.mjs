/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ianhistorillo-portfolio-image.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/public/img/**",
      },
    ],
  },
};

export default nextConfig;
