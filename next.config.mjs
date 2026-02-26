/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes for cleaner URLs
  trailingSlash: false,
}

export default nextConfig
