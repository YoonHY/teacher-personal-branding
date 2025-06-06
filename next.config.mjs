/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
      },
    ]
  }
}

export default nextConfig
