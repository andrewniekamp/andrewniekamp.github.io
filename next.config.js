/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  // darkMode: 'class',
  images: { unoptimized: true },
};

module.exports = nextConfig;
