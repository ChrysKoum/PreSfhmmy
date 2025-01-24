/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
